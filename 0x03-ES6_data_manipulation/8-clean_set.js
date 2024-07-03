export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !startString) {
    return '';
  }
  return [...set].filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((newVal) => newVal.replace(startString, ''))
    .join('-');
}
