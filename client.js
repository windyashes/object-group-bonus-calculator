// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  
 let bp = 0;
 let rating = employee.reviewRating;
  if(rating<=2){ bp = 0; } 
  else {
    if (rating > 2){ bp += 4; }
    if (rating > 3){ bp += 2; }
    if (rating > 4){ bp += 4; } // if reviewRating is 5, it will end up having the +%10
    if (employee.employeeNumber.length < 5){ bp += 5; }
    if (employee.annualSalary > 65000){ bp -= 1; }
  }
  if(bp > 13){ bp = 13; } 
    else 
  if (bp < 0){ bp = 0; }
  bp = bp/100;
  let bonus = employee.annualSalary * bp;
  bonus -= bonus % 1;
  let totalComp = employee.annualSalary + bonus;

  // return new object with bonus results
  return {
    name: employee.name,
    bonusPercentage: bp,
    totalCompensation: totalComp,
    totalBonus: bonus
  }
}

for (let i = 0; i < employees.length; i++){
  console.log(calculateIndividualEmployeeBonus(employees[i]));
}
