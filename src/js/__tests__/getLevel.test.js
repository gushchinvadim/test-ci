const { getLevel } = require('../getLevel');
const fetchData = require('../http');

jest.mock('../http'); // Теперь мок работает идеально

describe('getLevel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('returns level message when status is "ok"', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 10 });
    const result = getLevel(123);
    expect(result).toBe('Ваш текущий уровень: 10');
    expect(fetchData).toHaveBeenCalledWith('https://server/user/123');
  });

  test('returns fallback when status is not "ok"', () => {
    fetchData.mockReturnValue({ status: 'error' });
    const result = getLevel(456);
    expect(result).toBe('Информация об уровне временно недоступна');
  });
});