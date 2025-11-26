

const { sortHeroesByHealth } = require('../sortHeroes');

describe('sortHeroesByHealth', () => {
  test('sorts heroes by health in descending order', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortHeroesByHealth(input);

    expect(result).toEqual(expected);


    expect(input).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);
  });

  test('handles empty array', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  test('handles single hero', () => {
    const hero = [{ name: 'друид', health: 50 }];
    expect(sortHeroesByHealth(hero)).toEqual(hero);
  });

  test('handles heroes with equal health', () => {
    const input = [
      { name: 'A', health: 50 },
      { name: 'B', health: 50 },
    ];
    const result = sortHeroesByHealth(input);
    expect(result).toEqual(input); 
  });
});