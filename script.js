// Nested If-Else

// Example
let year = 2002;
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

console.log(IsleapYear ? "Leap Year" : "Not A Leap Year");