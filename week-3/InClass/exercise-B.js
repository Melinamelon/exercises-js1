//Use the array of the people from your class
let studentsA = ["Jorge", "Gabriel", "Roberto", "Edgardo", "Genaro"];

//Combine it with another array filled with the names from another class
let studentsB = ["Edda", "Yésica", "Jezabel", "Abril", "Angelita"];

//console.log the names in alphabetical order
const AorderedStudents = studentsA.sort();
console.log(AorderedStudents);

//Create a function that takes a name and an array of names and returns a string.
//If the name is not in an array, it should return <name> is not at the class with <people in the array>
//If the name is in the array, it should return <name> is at the class with <people in the array>.

function takeAName(nombre, lista) {
    if (lista.includes(nombre)) {
        return nombre + " is at the class with " + lista;
    } else {
        return nombre + " is not at the class with " + lista;
    }
}

console.log(takeAName("Juan", studentsA))
console.log(takeAName("Gabriel", studentsA))