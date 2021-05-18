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