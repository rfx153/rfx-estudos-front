export type FaixaDesempenho =
  | 'performance-neutral'
  | 'performance-red'
  | 'performance-orange'
  | 'performance-yellow'
  | 'performance-light-green'
  | 'performance-green';

export function calcularPercentualDesempenho(feitas = 0, acertadas = 0): number {
  if (!feitas) return 0;
  return Math.max(0, Math.min(100, Math.round((acertadas / feitas) * 100)));
}

export function classeDesempenho(
  percentual: number | null | undefined,
  possuiDados = true,
): FaixaDesempenho {
  if (!possuiDados || percentual == null || !Number.isFinite(percentual)) return 'performance-neutral';
  if (percentual < 60) return 'performance-red';
  if (percentual < 70) return 'performance-orange';
  if (percentual < 80) return 'performance-yellow';
  if (percentual < 90) return 'performance-light-green';
  return 'performance-green';
}
