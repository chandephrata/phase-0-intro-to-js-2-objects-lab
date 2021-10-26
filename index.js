// Write your solution in this file!
const employee= { 
    Name: 'Paul',
     Street:'Lincoln',
    }
    function updateEmployeeWithKeyAndValue(employee,key, value){
        const newEmployee ={ ...object};
        newEmployee[key] = value
        return newEmployee;
    }
