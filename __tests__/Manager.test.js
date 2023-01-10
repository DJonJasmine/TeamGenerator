const Manager = require('../lib/Manager');

it('Create an office number.', () => {
    const testOfficeNumber = 2;
    const employee = new Manager('Jane', 2, 'JaneDoe@gmail.com', testOfficeNumber);
    expect(employee.officeNumber).toBe(testOfficeNumber);
});

test('Testing officeNumber will return office number.', () => {
    const testOfficeNumber = 2;
    const employee = new Manager('Jane', 2, 'JaneDoe@gmail.com', testOfficeNumber);
    expect(employee.getOfficeNumber()).toBe(testOfficeNumber);
});

test('Testing role.', () => {
    const returnValue = 'Manager';
    const employee = new Manager('Jane', 2, 'JaneDoe@gmail.com', 2);
    expect(employee.getRole()).toBe(returnValue);
});