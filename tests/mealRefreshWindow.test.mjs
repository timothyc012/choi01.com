import assert from 'node:assert/strict';
import test from 'node:test';

import { shouldRunMealRefresh } from '../scripts/check-meal-refresh-window.mjs';

test('refresh window follows Berlin 06:00 through winter and summer time', () => {
  assert.equal(shouldRunMealRefresh(new Date('2026-01-05T05:00:00Z')), true);
  assert.equal(shouldRunMealRefresh(new Date('2026-08-31T04:00:00Z')), true);
});

test('refresh window rejects the adjacent UTC candidate and non-Monday', () => {
  assert.equal(shouldRunMealRefresh(new Date('2026-01-05T04:00:00Z')), false);
  assert.equal(shouldRunMealRefresh(new Date('2026-08-31T05:00:00Z')), false);
  assert.equal(shouldRunMealRefresh(new Date('2026-09-01T04:00:00Z')), false);
});
