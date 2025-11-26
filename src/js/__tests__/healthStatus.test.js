
const { getHealthStatus } = require('../healthStatus');

describe('getHealthStatus', () => {
  test('returns "healthy" when health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  test('returns "wounded" when health is 50', () => {
    expect(getHealthStatus({ name: 'Воин', health: 50 })).toBe('wounded');
  });

  test('returns "wounded" when health is 30', () => {
    expect(getHealthStatus({ name: 'Лучник', health: 30 })).toBe('wounded');
  });

  test('returns "wounded" when health is 15', () => {
    expect(getHealthStatus({ name: 'Целитель', health: 15 })).toBe('wounded');
  });

  test('returns "critical" when health is 14', () => {
    expect(getHealthStatus({ name: 'Ассасин', health: 14 })).toBe('critical');
  });

  test('returns "critical" when health is 0', () => {
    expect(getHealthStatus({ name: 'Падший', health: 0 })).toBe('critical');
  });

  test('returns "critical" when health is negative', () => {
    expect(getHealthStatus({ name: 'Зомби', health: -5 })).toBe('critical');
  });
});