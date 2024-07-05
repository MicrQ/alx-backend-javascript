function printTeacher(teacher) {
    return "".concat(teacher.firstName[0], ". ").concat(teacher.lastName);
}
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
console.log(printTeacher({ firstName: teacher3.firstName, lastName: teacher3.lastName }));
