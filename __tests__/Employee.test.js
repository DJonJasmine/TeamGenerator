const Employee = require('../lib/Employee');

test('Create an new employee.', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('Testing name.', () => {
    const name = 'DJon';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('Testing ID.', () => {
    const id = 2;
    const employee = new Employee('DJon', id);
    expect(employee.id).toBe(id);
});

test('Testing email.', () => {
    const email = 'DJonHarrison94@gmail.com';
    const employee = new Employee('DJon', 2, email);
    expect(employee.email).toBe(email);
});

test('Testing name through getName method.', () => {
    const testName = 'DJon';
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

test('Testing ID through getID method.', () => {
    const testID = 2;
    const employee = new Employee('DJon', testID);
    expect(employee.getId()).toBe(testID);
});

test('Testing email through getEmail method.', () => {
    const testEmail = 'DJonHarrison94@gmail.com';
    const employee = new Employee('DJon', 2, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test('Testing role.', () => {
    const returnValue = 'Employee';
    const employee = new Employee('DJon', 2, 'DJonHarrison94@gmail.com');
    expect(employee.getRole()).toBe(returnValue);
});