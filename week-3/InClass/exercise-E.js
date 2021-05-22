// new Date()
// new Date(value)
// new Date(dateString)

// new Date(year, monthIndex)
// new Date(year, monthIndex, day)
// new Date(year, monthIndex, day, hours)
// new Date(year, monthIndex, day, hours, minutes)
// new Date(year, monthIndex, day, hours, minutes, seconds)
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)



let years = [1964, 2008, 1990, 2005, 1978, 1985, 1919];
let date = new Date().getFullYear();

function birthYear(year) {
    return date - year;
}

let edad = years.map(birthYear);

console.log(edad);
console.log(years);

// Take this array and create another array containing their ages.
// console.log the birth years array

let arr = [1964, 2008, 1999, 2005, 1978, 1985, 1919];


arr.forEach(function (arr) {
    console.log(2021 - arr);
});

//