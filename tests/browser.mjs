import { createRequire } from 'node:module';
import { mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { valuesCatalog } from '../src/data/demoData.js';
const { chromium } = createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.TEST_URL || 'http://127.0.0.1:4189';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const errors = [];
const page = await browser.newPage();
page.on('pageerror', error => errors.push(error.message));
const legacy = JSON.stringify([{ id: 'old', studentId: 's1', scores: { asistencia: 1 } }]);
await page.addInitScript(legacy => localStorage.setItem('tomas-moro-values-v2', legacy), legacy);
await mkdir('test-results', { recursive: true });
try {
  await page.goto(base);
  const mascot = page.getByRole('img', { name: 'Canguro con su cría y el uniforme del Colegio Franco Inglés', exact: true });
  await mascot.waitFor();
  await page.waitForFunction(() => document.querySelector('.mascot-art')?.naturalWidth > 0);
  assert.equal(await page.getByRole('img', { name: 'Escudo del Colegio Franco Inglés', exact: true }).count(), 1);
  await page.waitForFunction(() => [...document.querySelectorAll('.school-shield')].every(el => el.tagName === 'IMG' && el.complete && el.naturalWidth > 0));
  assert.equal(await page.locator('.school-shield').first().evaluate(el => getComputedStyle(el).clipPath), 'none');
  assert((await page.locator('.school-shield').first().getAttribute('src')).endsWith('/escudo-colegio-transparente.png'));
  assert(await page.locator('.school-shield').first().evaluate(el => {
    const canvas = document.createElement('canvas'); canvas.width = el.naturalWidth; canvas.height = el.naturalHeight;
    const ctx = canvas.getContext('2d'); ctx.drawImage(el, 0, 0);
    return el.naturalWidth > 1000 && [[0,0],[canvas.width-1,0],[0,canvas.height-1],[canvas.width-1,canvas.height-1]].every(([x,y]) => ctx.getImageData(x,y,1,1).data[3] === 0);
  }));
  await page.getByRole('tab', { name: 'Nueva evaluación' }).click();
  for (const value of valuesCatalog) await page.getByRole('slider', { name: value.label, exact: true }).waitFor();
  assert.equal(await page.getByRole('slider').count(), 5);
  assert.equal(await page.evaluate(() => localStorage.getItem('tomas-moro-values-v2')), legacy);
  const slider = page.getByRole('slider', { name: 'Fraternidad', exact: true });
  await slider.focus();
  await slider.press('End');
  for (let i = 0; i < 4; i++) await slider.press('ArrowLeft');
  await page.getByPlaceholder('Ej. Mostro liderazgo al ayudar a ordenar el material.').fill('Prueba ficticia de la nueva rúbrica');
  await page.getByRole('button', { name: 'Guardar evaluacion', exact: true }).click();
  await page.waitForFunction(() => JSON.parse(localStorage.getItem('tomas-moro-values-v3')).some(row => row.notes === 'Prueba ficticia de la nueva rúbrica'));
  await page.reload();
  await page.getByRole('tab', { name: 'Nueva evaluación' }).click();
  assert.equal(await slider.inputValue(), '96');
  // Exercise the longest metric label as well as narrow evaluation controls.
  await page.evaluate(() => {
    const rows = JSON.parse(localStorage.getItem('tomas-moro-values-v3'));
    for (const row of rows) for (const key of Object.keys(row.scores)) row.scores[key] = key === 'esfuerzo_perseverancia_superacion' ? 100 : 25;
    localStorage.setItem('tomas-moro-values-v3', JSON.stringify(rows));
  });
  await page.reload();
  for (const width of [320, 390, 1440]) {
    await page.setViewportSize({ width, height: 950 });
    await page.getByRole('tab', { name: 'Resumen del alumno' }).click();
    await page.evaluate(() => window.scrollTo(0, 0));
    assert((await mascot.boundingBox()).width >= 200);
    await page.screenshot({ path: `test-results/welcome-${width}.png` });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overview overflow at ${width}`);
    await page.screenshot({ path: `test-results/overview-${width}.png`, fullPage: true });
    await page.getByRole('tab', { name: 'Nueva evaluación' }).click();
    assert.equal(await page.locator('.school-shield').count(), 3);
    await page.locator('.evaluation-identity').screenshot({ path: `test-results/shield-${width}.png` });
    await page.getByRole('slider', { name: 'Sencillez', exact: true }).scrollIntoViewIfNeeded();
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Page overflow at ${width}`);
    for (const input of await page.getByRole('slider').all()) assert((await input.boundingBox()).height >= 44);
    await page.screenshot({ path: `test-results/values-${width}.png`, fullPage: true });
    console.log(JSON.stringify({ width, fiveValues: true, noOverflow: true, touchControls: true }));
  }
  await page.evaluate(() => localStorage.setItem('tomas-moro-values-v3', 'invalid JSON'));
  await page.reload();
  await page.getByRole('tab', { name: 'Nueva evaluación' }).click();
  await page.getByRole('slider', { name: 'Fraternidad', exact: true }).waitFor();
  assert.deepEqual(errors, []);
  console.log('Guardado, recarga, rúbrica anterior intacta y recuperación de datos inválidos: OK');
} finally { await browser.close(); }
