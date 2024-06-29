export default function createIteratorObject(report) {
  let list = [];

  for (const item of Object.keys(report.allEmployees)) {
    list = [...list, ...report.allEmployees[item]];
  }

  return list;
}
