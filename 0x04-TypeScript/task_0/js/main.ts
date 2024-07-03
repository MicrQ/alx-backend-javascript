interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Mike',
  lastName: 'Tyson',
  age: 55,
  location: 'USA',
};

const student2: Student = {
  firstName: 'Jake',
  lastName: 'Paul',
  age: 28,
  location: 'US',
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');

const thead = document.createElement('thead');
let tr = document.createElement('tr');
const td_col1 = document.createElement('td');
const td_col2 = document.createElement('td');

td_col1.textContent = 'First Name';
td_col2.textContent = 'Location';
tr.appendChild(td_col1);
tr.appendChild(td_col2);
thead.appendChild(tr);

const tbody = document.createElement('tbody');
studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const fname = document.createElement('td');
  const loc = document.createElement('td');
  fname.textContent = student.firstName;
  loc.textContent = student.location;
  row.appendChild(fname);
  row.appendChild(loc);
  tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);
