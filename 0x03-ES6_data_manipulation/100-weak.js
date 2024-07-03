export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let value = weakMap.get(endpoint) || 0;
  value++;

  if (value >= 5) {
    throw Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, value);
  }
}
