import test from 'node:test';
import assert from 'node:assert/strict';
import { valuesCatalog, initialAssessments, students } from '../src/data/demoData.js';
import { average, buildLeaderboard, valueAverages } from '../src/utils/scoring.js';

test('Catálogo solicitado en su orden, con claves y abreviaturas únicas', () => {
  assert.deepEqual(valuesCatalog.map(value => value.label), [
    'Fraternidad', 'Alegría', 'Esfuerzo, perseverancia y superación', 'Sencillez', 'Respeto y juego limpio'
  ]);
  assert.equal(new Set(valuesCatalog.map(value => value.key)).size, 5);
  assert.equal(new Set(valuesCatalog.map(value => value.short)).size, 5);
  assert(valuesCatalog.every(value => value.description.length > 20));
});

test('Datos ficticios completos bajo la nueva rúbrica y promedios consistentes', () => {
  const keys = valuesCatalog.map(value => value.key).sort();
  for (const row of initialAssessments) {
    assert.deepEqual(Object.keys(row.scores).sort(), keys);
    assert(Object.values(row.scores).every(score => score >= 0 && score <= 100));
  }
  const ranking = buildLeaderboard(students, initialAssessments);
  assert.equal(ranking.length, students.length);
  assert(ranking.every((row, i) => !i || ranking[i - 1].score >= row.score));
  assert(valueAverages(initialAssessments).every(value => value.score > 0 && value.score <= 100));
});

test('Cero es una nota válida en el promedio por valor', () => {
  const key = valuesCatalog[0].key;
  assert.equal(valueAverages([{ studentId: 'a', date: '2026-11-01', scores: { [key]: 0 } }, { studentId: 'b', date: '2026-11-01', scores: { [key]: 100 } }])[0].score, 50);
  assert.equal(average({ a: 0, b: 100 }), 50);
});
