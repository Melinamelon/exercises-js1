let birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function canDrive(year) {
  let age = (2021 - year);
  if (age >= 17) {
    return "Born in " + year + " can drive";
  }
  else {
    return "Born in " + year + " can drive in " + (17 - age) + " years.";
  }
}

for (x in birthYear) {
  console.log(canDrive(birthYear[x]));
}



// otro modo de hacerlo 

const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const date = new Date().getFullYear();

let drivers = years.map(element => {
  if (date - element >= 17) {
    return `Born in ${element} can drive`;
  } else {
    return `Born in ${element} can drive in ${17 - (date - element)} years`;
  }
});

console.log(drivers);