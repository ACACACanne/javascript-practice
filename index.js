//Print message to console
console.log("Hello, World!");

//if else statement
let myVariable = 5;

let friend_count = 500;
let friendRequestCount = 100;

if (friend_count > 100 || friendRequestCount > 50) {
    console.log("You have a lot of friends or friend requests!");
} else {
    console.log("You have a manageable number of friends and friend requests.");
}

//Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}   
console.log("Sum:", addNumbers(3, 7));

//Array of fruits
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Date");
console.log("Fruits:", fruits); 

//var vs let vs const
//var (we avoid using var in modern JS)
if (true) {
    var x = 10;
}   

console.log(x); // output: 10, and no error, because var is function-scoped or globally-scoped. I can access x outside the block and it let override variables
//causing potential bugs
if (true) {
    let y = 20;
    console.log(y); // output: 20
}
// console.log(y); // Error: y is not defined, because it is outside the block
// when we use let, the variable is block-scoped (only accessible within the block it is defined in)

const z = 30; // constant variable, cannot be reassigned, constant reference
console.log(z); // output: 30
// z = 40; // Error: Assignment to constant variable

// z is not a constant value, but a constant reference to the value 30
// but if z were an object or array, we could modify its contents
const myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray); // output: [1, 2, 3, 4]

//if we use let
let z = 30;
z = 40; // valid reassignment
console.log(z); // output: 40

//numbers vs strings
let num = 100; // number
let str = "100"; // string  
console.log(num + 50); // output: 150 (number addition)
console.log(str + "50"); // output: "10050" (string concatenation)  
console.log(num == str); // output: true (loose equality, type coercion)
console.log(num === str); // output: false (strict equality, no type coercion)
console.log(typeof num); // output: "number"
console.log(typeof str); // output: "string"    

//type coercion
let result1 = '5' + 10; // '510' (string concatenation)
let result2 = '5' - 2; // 3 (number subtraction, '5' is coerced to 5)
console.log(result1); // output: '510'
console.log(result2); // output: 3  
console.log(typeof result1); // output: "string"
console.log(typeof result2); // output: "number"

//transfer between number and string
let first_num = "10"; // string
let second_num = "20"; // string
let sum = Number(first_num) + Number(second_num); // convert to numbers and add
console.log("Sum:", sum); // output: 30
console.log(typeof sum); // output: "number"

let my_variable = "1" 
console.log(my_variable + 1); // "11" (string concatenation)
console.log(my_variable - 1); // 0 (number subtraction, "1" is coerced to 1)
console.log(typeof (my_variable + 1)); // "string"
console.log(typeof (my_variable - 1)); // "number"  

//boolean values
let isActive = true; // boolean
let isComplete = false; // boolean
console.log(isActive); // output: true
console.log(isComplete); // output: false
console.log(typeof isActive); // output: "boolean"
console.log(typeof isComplete); // output: "boolean"    

//boolean context
if (isActive) {
    console.log("The feature is active.");  
} else {
    console.log("The feature is inactive.");
}   

//truthy and falsy values
let value1 = 0; // falsy
let value2 = 1; // truthy
let value3 = ""; // falsy
let value4 = "Hello"; // truthy
let value5 = null; // falsy
let value6 = undefined; // falsy
let value7 = []; // truthy
let value8 = {}; // truthy              
console.log(Boolean(value1)); // output: false
console.log(Boolean(value2)); // output: true
console.log(Boolean(value3)); // output: false
console.log(Boolean(value4)); // output: true
console.log(Boolean(value5)); // output: false
console.log(Boolean(value6)); // output: false
console.log(Boolean(value7)); // output: true
console.log(Boolean(value8)); // output: true

//conditional statements        
let score = 85;
if (score >= 90) {
    console.log("Grade: A");        
} else if (score >= 80) {
    console.log("Grade: B");        
}   
else if (score >= 70) {
    console.log("Grade: C");        
}   
else {
    console.log("Grade: F");        
}

//switch statement
let day = 3;
let dayName;
switch (day) {
    case 1: dayName = "Monday"; break;
    case 2: dayName = "Tuesday"; break;
    case 3: dayName = "Wednesday"; break;   
    case 4: dayName = "Thursday"; break;
    case 5: dayName = "Friday"; break;
    case 6: dayName = "Saturday"; break;    
    case 7: dayName = "Sunday"; break;
    default: dayName = "Invalid day";        
}
console.log("Day:", dayName); // output: "Day: Wednesday"

//ternary operator
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote:", canVote); // output: "Can vote: Yes"   

//loops
//for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);        
}       
//while loop
let count = 0;
while (count < 5) {
    console.log("Count:", count);
    count++;
}
//do-while loop
let numCount = 0;   
do {
    console.log("NumCount:", numCount);
    numCount++;
} while (numCount < 5);

//break and continue    
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit loop when i is 5
    }   
    console.log("Break Loop i:", i);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // skip even numbers
    }   
    console.log("Continue Loop i:", i); // only odd numbers will be printed
}   

//numbers vs strings
let num = 100; // number
let str = "100"; // string  
console.log(num + 50); // output: 150 (number addition)
console.log(str + "50"); // output: "10050" (string concatenation)  
console.log(num == str); // output: true (loose equality, type coercion)
console.log(num === str); // output: false (strict equality, no type coercion)
console.log(typeof num); // output: "number"
console.log(typeof str); // output: "string"        

