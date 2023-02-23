export function MathNumber(number: number) {
  return '$' + Math.trunc(number).toFixed(2);
}
