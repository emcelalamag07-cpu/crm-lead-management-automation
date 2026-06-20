const timestamp = Date.now();

export const employeeData = {

    validEmployee: {
        firstName: `Mouse${timestamp}`,
        lastName: 'Automation',
        fullName: `Mouse${timestamp} Automation`
    },

    blankFirstName: {
        firstName: '',
        lastName: 'Automation'
    },

    blankLastName: {
        firstName: 'Mouse',
        lastName: ''
    },

    searchEmployee: {
        employeeName: 'Mouse'
    },

    nonExistingEmployee: {
        employeeName: 'XYZ123Employee'
    }

    

};