var student1 = {
    firstName: 'Mike',
    lastName: 'Tyson',
    age: 55,
    location: 'USA',
};
var student2 = {
    firstName: 'Jake',
    lastName: 'Paul',
    age: 28,
    location: 'US',
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var thead = document.createElement('thead');
var tr = document.createElement('tr');
var td_col1 = document.createElement('td');
var td_col2 = document.createElement('td');
td_col1.textContent = 'First Name';
td_col2.textContent = 'Location';
tr.appendChild(td_col1);
tr.appendChild(td_col2);
thead.appendChild(tr);
var tbody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var fname = document.createElement('td');
    var loc = document.createElement('td');
    fname.textContent = student.firstName;
    loc.textContent = student.location;
    row.appendChild(fname);
    row.appendChild(loc);
    tbody.appendChild(row);
});
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);
