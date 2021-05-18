// Create an array with the names of the people on your table
let alumnos = ["Lola", "Melina", "Nadia", "Jorge", "Yésica", "Belén", "Vanesa"];

// console.log out the names and how many people are at the table
console.log(alumnos);
console.log(alumnos.length);

// Put someone from another table at the beginning of the array
alumnos[0] = "Florencia";
console.log(alumnos);

// Add someone else to the end of the list
alumnos[7] = "Valeria";
console.log(alumnos);
alumnos.push("Valerio");
console.log("Prueba con push"+alumnos);
// .sort()
const nombresOrdered = alumnos.sort();
console.log(nombresOrdered);

//.concat()

const newLista = alumnos.concat("Silvi");
console.log(newLista)

// .slice()
// $ node
// > let arr = [0, 1, 2, 3, 4]
// undefined
// > arr.slice(0, 2)
// [0, 1]
// > ["a", "b", "c", "d"].slice(1, 2)
// ['b']

// .includes()
function isInMyClass(name) {
    return alumnos.includes(name);
}
console.log("Is Melina in my class?");
console.log(isInMyClass("Melina"));

// .join()
// $ node
// > ["H", "e", "l", "l", "o"].join();
// 'H,e,l,l,o'
// > ["H", "e", "l", "l", "o"].join("--");
// 'H--e--l--l--o'

// alumnos.unshift("Alberto");
// console.log(alumnos.length);
// console.log(alumnos);
// alumnos.push("Maria");
// console.log(alumnos.length);
// console.log(alumnos);
// alumnos.sort();