function canDriveChecker(año) {
  return 2014 > año;
}

let peopleWantToDrive = [1964, 2018, 2020, 2005, 1978, 1985, 1919];


let peopleCanDrive = peopleWantToDrive.filter(canDriveChecker);

console.log("the filtered people are", peopleCanDrive)

arr = ['Nora', 'maya', 'MELINA', 'paTriCia']
//arr = 'nora', 'maya', 'melina', 'patricia'

arr.map(x => x.toUpperCase())