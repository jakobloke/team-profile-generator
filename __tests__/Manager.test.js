const Manager = require('../lib/Manager');

//create a test that makes sure a new Manager object is created
test('test to create new Manager object', () => {
    const manager = new Manager('Bill', 1, 'bill@hotmail.com', 123);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

//create a test that checks if getRole returns the correct data
test('test that getRole method returns the correct data', () => {
    const manager = new Manager('Bill', 1, 'bill@hotmail.com', 123);

    expect(manager.getRole()).toEqual('Manager');
})