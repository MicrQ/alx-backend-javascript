export default function updateStudentGradeByCity(students, city, grades) {
  return students.filter((student) => student.location === city)
  .map((student) => {
    const gradeObj = grades.find((grade) => grade.studentId === student.id);
    student.grade = gradeObj ? gradeObj.grade : "N/A";
    return student;
  });
}
