// Create a function that takes a birthYear, and returns the age of someone
// You are given an array with year that 7 people were born,
//Date() constructor
//Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format.Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.



let years = [1964, 2008, 1990, 2005, 1978, 1985, 1919];
let date = new Date().getFullYear();

function birthYear(year){
    return date - year;
}

let edad = years.map(birthYear);

console.log(edad);
console.log(years);

// Take this array and create another array containing their ages.
// console.log the birth years array