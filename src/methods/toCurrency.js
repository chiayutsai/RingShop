export default function toCurrency(num) {
  const parts = num?.toString().split('.') || ['0'];
  parts[0] = parts[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
