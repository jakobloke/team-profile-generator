const Engineer = require('../lib/Engineer')

//test that a new Engineer object is created properly
test('create new Engineer object', () => {
    const engineer = new Engineer('Bill', 1, 'bill@hotmail.com', 'jakobloke');

    expect(engineer.github).toEqual(expect.any(String));
})

//test to verify getGithub returns the correct data
test('test that getGithub returns the right data', () => {
    const engineer = new Engineer('Bill', 1, 'bill@hotmail.com', 'jakobloke');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

//test to verify that getRole returns the correct data
test('test that getRole method returns the right data', () => {
    const engineer = new Engineer('Bill', 1, 'bill@hotmail.com', 'jakobloke');

    expect(engineer.getRole()).toEqual('Engineer');
})


