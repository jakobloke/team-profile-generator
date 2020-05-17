const Employee = require('../lib/Employee.js');

//create new employee test
test('creates an employee object', () => {
    const employee = new Employee('Bill', 1, 'bill@hotmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
})

//check to see if getName returns string
test('test to see if getName function returns string', () => {
    const employee = new Employee('Bill', 1, 'bill@hotmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})

//check if getId returns number
test('test if getId function returns number', () => {
    const employee = new Employee('Bill', 1, 'bill@hotmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})

//check if getEmail returns email
test('test if getEmail function returns an email', () => {
    const employee = new Employee('Bill', 1, 'bill@hotmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})