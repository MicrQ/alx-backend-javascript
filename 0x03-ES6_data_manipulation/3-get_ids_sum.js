export default function getStudentIdSum(students) {
  return students.map((student) => student.id).reduce((acc, current) => acc + current);
}
