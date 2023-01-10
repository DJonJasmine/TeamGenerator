const Engineer = require('../lib/Engineer');

test('Create github.', () => {
    const testGithub = 'DJonJasmine';
    const employee = new Engineer('DJon', 2, 'DJonHarrison94@gmail.com', testGithub);
    expect(employee.github).toBe(testGithub);
});

test('Testing getGithub to return github.', () => {
    const testGithub = 'DJonJasmine';
    const employee = new Engineer('DJon', 2, 'DJonHarrison94@gmail.com', testGithub);
    expect(employee.getGithub()).toBe(testGithub);
});

test('Testing role.', () => {
    const returnValue = 'Engineer';
    const employee = new Engineer('DJon', 2, 'DJonHarrison94@gmail.com', 'DJonJasmine');
    expect(employee.getRole()).toBe(returnValue);
});