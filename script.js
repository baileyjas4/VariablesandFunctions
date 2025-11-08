// #!/usr/bin/env node

// //TASK 1 
// // This code checks if both a first and last name are given — if they are, it returns the full name; if not, it returns “Wrong Name Input.”

// function fullname(firstName, lastName) { // create a function

//     if (!firstName || !lastName){ //If a first or last name is not entered then it need to return wrong name input
//         return "Wrong Name Input. Please enter first and last name.";
//     }
    
//     return lastName + ', ' + firstName; // if both a first and last name is inputted it returns last, first name

// }

// console.log(fullname ("Jasmine", "Bailey")); // run the function



//TASK 2

// function calculateTotalCost(Price, Quantity, Taxrate){ //create our function

//     if(typeof Price !== 'number' || typeof Quantity !== 'number' || typeof Taxrate !== 'number'){ //check to see if input is a number if not return wrong input

//         return "Wrong Input";

//     }

//     return (Price * Quantity) * (1 + Taxrate) //return calculation if their all numbers

// }

//  console.log(calculateTotalCost(1,4,3))


//     //TASK 3

// let age = "true";

//  if (age >= 16){
//     console.log("you are old enough to drive!")
//  }

//  if (age >= 21){
//     console.log("You are old enough to drink")
//  } else if (age < 21) {
//    console.log("You are too young to drink")
// } else {
//     console.log(" either you are too young, too old, or dont exist")}



//TASK 4

function calculateTotalCost(Price, Quantity, Taxrate, Discount){ //create our function

    if(typeof Price !== 'number' || typeof Quantity !== 'number' || typeof Taxrate !== 'number' || typeof Discount !== 'number'){ //check to see if input is a number if not return wrong input

        return "Wrong Input";

    }

    return (Price * Quantity) * (1 + Taxrate) - Discount//return calculation if their all numbers

}

 console.log(calculateTotalCost(1,4,3,2))
