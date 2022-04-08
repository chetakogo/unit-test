/* eslint-disable no-undef */
import healthLevel from '../players';

test('healthy player', () => {
  const healthPlayer = { name: 'Маг', health: 90 };
  const result = healthLevel(healthPlayer);
  expect(result).toBe('healthy');
});

test('wounded player', () => {
  const healthPlayer = { name: 'Мечник', health: 32 };
  const result = healthLevel(healthPlayer);
  expect(result).toBe('wounded');
});

test('critical player', () => {
  const healthPlayer = { name: 'Лучник', health: 10 };
  const result = healthLevel(healthPlayer);
  expect(result).toBe('critical');
});
