// Write your solution in this file!
const employee= { 
    Name: 'Paul',
     Street:'Lincoln',
    }
    function updateEmployeeWithKeyAndValue(employee,key, value){
        const newEmployee ={ ...employee};
        newEmployee[key] = value
        return newEmployee;
    }
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let newEmployee = Object.assign({}, employee);
   delete newEmployee[key];
   return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
