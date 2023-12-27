// Write your solution in this file!
const employee = {
  name: "Sam",
  streetAddress: "12 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ... employee, [key]: value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Directly modify the employee object by assigning the new value to the given key
  employee[key] = value;

  // Return the modified employee object
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ... employee}
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}


// // function updateEmployeeWithKeyAndValue(employee, key, value) {
//     // Create a new Object by spreading the original employee and adding the new key-value pair
//     return {
//       ...employee,
//       [key]: value
//     };
//   }
  
//   // Function to update an employee Object with a new key-value pair (destructive)
//   function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     // Mutate the original employee by directly assigning the new key-value pair
//     employee[key] = value;
//     return employee; // Return the updated employee (though this step is not necessary)
//   }
  
//   // Function to delete a key-value pair from an employee Object (non-destructive)
//   function deleteFromEmployeeByKey(employee, key) {
//     // Create a new Object by spreading the original employee and omitting the specified key
//     const newEmployee = { ...employee };
//     delete newEmployee[key];
//     return newEmployee;
//   }
  
//   // Function to delete a key-value pair from an employee Object (destructive)
//   function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     // Mutate the original employee by using the delete operator to remove the specified key
//     delete employee[key];
//     return employee; // Return the updated employee (though this step is not necessary)
//   }
  
//   // Example usage:
//   const employee = {
//     name: "John Doe",
//     streetAddress: "123 Main Street"
//   };
  
//   const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "email", "john@example.com");
//   console.log(updatedEmployee);
  
//   const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "phone", "555-1234");
//   console.log(destructivelyUpdatedEmployee);
  
//   const employeeWithoutStreetAddress = deleteFromEmployeeByKey(employee, "streetAddress");
//   console.log(employeeWithoutStreetAddress);
  
//   const destructivelyDeletedStreetAddress = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
//   console.log(destructivelyDeletedStreetAddress);
  
 
  
  
  
  
  
  