export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer, 0, length);
  const int8Array = new Int8Array(buffer);

  int8Array[position] = value;
  return dataView;
}
