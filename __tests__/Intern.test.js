const Intern = require('../lib/Intern');

test('Create school.', () => {
    const testSchool = 'School Name';
    const employee = new Intern('John', 2, 'JohnDoe@gmail.com', testSchool);
    expect(employee.school).toBe(testSchool);
});

test('Testing officeNumber will return office number.', () => {
    const testSchool = 'School Name';
    const employee = new Intern('John', 2, 'JohnDoe@gmail.com', testSchool);
    expect(employee.getSchool()).toBe(testSchool);
});

test('Testing role.', () => {
    const returnValue = 'Intern';
    const employee = new Intern('John', 2, 'JohnDoe@gmail.com', 'School Name');
    expect(employee.getRole()).toBe(returnValue);
});