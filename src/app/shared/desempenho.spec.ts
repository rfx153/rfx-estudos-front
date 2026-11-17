import { calcularPercentualDesempenho, classeDesempenho } from './desempenho';

describe('escala de desempenho', () => {
  it.each([
    [0, 'performance-red'],
    [59, 'performance-red'],
    [60, 'performance-orange'],
    [69, 'performance-orange'],
    [70, 'performance-yellow'],
    [79, 'performance-yellow'],
    [80, 'performance-light-green'],
    [89, 'performance-light-green'],
    [90, 'performance-green'],
    [100, 'performance-green'],
  ])('classifica %i%% como %s', (percentual, classe) => {
    expect(classeDesempenho(percentual)).toBe(classe);
  });

  it('mantém neutro quando não existem questões', () => {
    expect(classeDesempenho(0, false)).toBe('performance-neutral');
  });

  it('calcula e limita o percentual entre zero e cem', () => {
    expect(calcularPercentualDesempenho(10, 7)).toBe(70);
    expect(calcularPercentualDesempenho(10, 12)).toBe(100);
    expect(calcularPercentualDesempenho(0, 0)).toBe(0);
  });
});
