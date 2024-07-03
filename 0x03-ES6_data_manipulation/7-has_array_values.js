export default function hasValuesFromArray(set, arr) {
  return arr.map((element) => set.has(element))
    .reduce((bool1, bool2) => bool1 && bool2);
}
