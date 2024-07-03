export default function cleanSet(set, startString) {
  return [...set].filter((value) => value.startsWith(startString))
    .map((newVal) => newVal.replace(startString, ""))
    .join('-');
}
