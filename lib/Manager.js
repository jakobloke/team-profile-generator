const Employee = require('./Employee');

//create Manager class that extends properties of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber
    }

    getRole() {
        return 'Manager';
    }

}

module.exports = Manager;