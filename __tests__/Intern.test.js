const Intern = require('../lib/Intern');

//testing that the Intern class is created with a valid school string
test('create a new Intern object', () => {
    const intern = new Intern('Bill', 1, 'bill@hotmail.com', 'UCD');

    expect(intern.school).toEqual(expect.any(String));
})

//testing the getRole function in Intern class
test('check if getRole function returns correct data', () => {
    const intern = new Intern('Bill', 1, 'bill@hotmail.com', 'UCD');

    expect(intern.getRole()).toEqual('Intern');
})