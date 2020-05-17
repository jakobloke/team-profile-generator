const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const employeeArr = [];

//function to prompt the initial manager questions, and push that information into an array then prompt for any additional employees.
const managerPrompt = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Team Manager's name (Required)",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Please enter the Managers name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your managers employee id?',
            validate: managerIdInput => {
                if (managerIdInput > 0) {
                    return true;
                } else {
                    console.log('Please enter an appropriate id.');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'email',
            message: 'Please enter your Managers email address',
            validate: managerEmailInput => {
                if (managerEmailInput.includes('@') && managerEmailInput.includes('.com')) {
                    return true;
                } else {
                    console.log('Please enter a valid email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your Managers office number',
            validate: managerOfficeNumber => {
                if (managerOfficeNumber > 0) {
                    return true;
                } else {
                    console.log('Please enter a valid office nubmer');
                    return false;
                }
            }
        }
    ]).then((responses) => {
        const {name, id, email, officeNumber} = responses
        const manager = new Manager(name, id, email, officeNumber);

        employeeArr.push(manager);

        additionalEmployees();
    })
};

//function that prompts for any additional employees, and runs the functions to add the information for those employees
const additionalEmployees = function () {
    inquirer.prompt([
        {
            type:'list',
            name:'position',
            message:'Would you like to include other team members?',
            choices: ['Intern', 'Engineer', 'N/A'],
            validate: correctPosition => {
                if(correctPosition) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then((responses) => {
        const role = responses.position;
        console.log(role);
        
        if (role === 'Intern') {
            console.log('Input additional information for an Intern');

            addIntern();
        } 
        else if (role === 'Engineer') {
            console.log('Input additional information for an Engineer');

            addEngineer();
        }
        else if (role === 'N/A') {
            console.log('No other roles will be added');

            writeFile(employeeArr);
        }
    })
}

const addIntern = function () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of an Intern',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter a valid name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the id of an Intern',
            validate: internId => {
                if (internId > 0) {
                    return true;
                } else {
                    console.log('Please enter a valid id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter and email address for the Intern',
            validate: internEmail => {
                if (internEmail.includes('@') && internEmail.includes('.com')) {
                    return true;
                } else {
                    console.log('Please enter a valid email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the school the Intern attends',
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log('Please enter the school the Intern attends');
                    return false;
                }
            }
        }
    ]).then((responses) => {
        const {name, id, email, school} = responses
        const intern = new Intern(name, id, email, school);

        employeeArr.push(intern);
        console.log(intern);

        additionalEmployees();
    })
}

const addEngineer = function () {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the Engineer',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the Engineers name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the id number of the Engineer', 
            validate: engineerId => {
                if (engineerId > 0) {
                    return true;
                } else {
                    console.log('Please enter a valid id number');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'email', 
            message: 'Please enter an email address for the Engineer', 
            validate: engineerEmail => {
                if (engineerEmail.includes('@') && engineerEmail.includes('.com')) {
                    return true;
                } else {
                    console.log('Please enter a valid email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github', 
            message: 'Please enter the Engineers github username', 
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    console.log('Please enter the github username');
                    return false;
                }
            }
        }
    ]).then((responses) => {
        const {name, id, email, github} = responses
        const engineer = new Engineer(name, id, email, github);

        employeeArr.push(engineer);

        additionalEmployees();
    })
}

const writeFile = function(additionalEmployees) {
    const finishedHTML = generateHTML(additionalEmployees);

    fs.writeFile('./dist/index.html', finishedHTML, err => {
        if(err) throw new Error(err);
        console.log('The team page has been completed');
    })
}

managerPrompt();