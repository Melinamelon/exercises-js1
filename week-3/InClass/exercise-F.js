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



