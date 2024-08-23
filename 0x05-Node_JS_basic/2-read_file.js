const fs = require('fs');

const countStudents = (db_path) => {
  if (!fs.existsSync(db_path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(db_path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(db_path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const stud_grp = {};
  const field_names = fileLines[0].split(',');
  const studentPropNames = field_names.slice(0, field_names.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(stud_grp).includes(field)) {
      stud_grp[field] = [];
    }
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    stud_grp[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object
    .values(stud_grp)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(stud_grp)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
