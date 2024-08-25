import fs from 'fs';


const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  if (path) {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const lines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studGrp = {};
        const dbFieldNames = lines[0].split(',');
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

        for (const line of lines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studGrp).includes(field)) {
            studGrp[field] = [];
          }
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          studGrp[field].push(Object.fromEntries(studentEntries));
        }
        resolve(studGrp);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
