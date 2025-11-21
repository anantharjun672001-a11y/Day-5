// Nested If-Else

// Example
/* let year = 2002;
let IsleapYear;

if(year %4 ===0){
 if(year % 100 ===0){
    if(year % 400 ===0){
        IsleapYear = true;
    }
    else{
        IsleapYear = false
    }
 }
 else{
     IsleapYear = true;
 }
} else{
    IsleapYear = false;
}

console.log(IsleapYear ? "Leap Year" : "Not A Leap Year"); */

//switch statements

/* let month = parseInt (prompt("Enter a month to find the number of days in that month"));

switch(month){
    case 1 : console.log(31);
    break;
    case 2 : console.log(28);
    break;
    case 3 : console.log(31);
    break;
    case 4 : console.log(30);
    break;
    case 5 : console.log(31);
    break;
    case 6 : console.log(30);
    break;
    case 7 : console.log(31);
    break;
    case 8 : console.log(31);
    break;
    case 9 : console.log(30);
    break;
    case 10 : console.log(31);
    break;
    case 11 : console.log(30);
    break;
    case 12 : console.log(31);
    break;
    default : console.log("Enter a number between 1 to 12");
} */


// Nested for loop
 /* for(let i =1; i<=4 ; i=i+1){
    for (let j = 1; j<=4; j=j+1){
        console.log("i:"+i, "j:"+j);
        
    }
 } */

 // Array & Array Methods
/* 
let fruits = ["apple", "orange", "mango"]
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
} */


//Common Array Methods
let fruits = ["apple", "orange", "mango"]



// push() and pop() : Add or remove elements from the end of an array

//Example:
fruits.push("banana");
console.log(fruits);

fruits.pop();
console.log(fruits);

// shift() and unshift(): Add or remove elements from the start of an array

fruits.unshift("kiwi");
console.log(fruits);

fruits.shift();
console.log(fruits);