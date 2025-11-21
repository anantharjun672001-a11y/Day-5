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

let month = parseInt (prompt("Enter a month to find the number of days in that month"));

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
}
