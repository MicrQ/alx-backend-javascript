interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

function printTeacher(teacher: printTeacherFunction) {
  return `${teacher.firstName[0]}. ${teacher.lastName}`;
}
