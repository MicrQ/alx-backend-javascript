export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const value = weakMap.get(endpoint) + 1;

    if (value >= 5) {
      throw Error('Endpoint load is high');
    }
    weakMap.set(endpoint, value);

  } else {
    weakMap.set(endpoint, 1);
  }
}