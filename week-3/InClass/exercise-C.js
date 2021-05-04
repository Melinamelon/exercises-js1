let animales = ["perrito", "osito", "ranita", "cerdito", "pecesito"];
function formatUpper(newString) {
    return newString.toUpperCase();
}
for (x in animales) {
    animales[x] = formatUpper(animales[x]);
}
console.log(animales);
let animalesMay = animales.map(formatUpper);
console.log(`Con map es asi: ${animalesMay}`);

// otro ejemplo con .map y arrow function

function abracaFunction(yourFunc) {
    console.log(
        "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
        "James",
        "Elamin",
        "Ismael",
        "Sanyia",
        "Chris",
        "Antigoni",
    ];

    const abracaOutput = yourFunc(abracaArray);

    return abracaOutput;
}

/*function yourFunc(arr){
    return arr.map((element) => element.toUpperCase());
}
console.log(abracaFunction(yourFunc));*/

console.log(abracaFunction((arr) => arr.map((element) => element.toUpperCase())));

console.log(abracaFunction((arr) => arr.sort()));


function nuevoNombre(seteoNombre) {
    let studentsA = ["Jorge", "Antonio", "Marc", "Daniel", "Marta"];
    return seteoNombre(studentsA);
}

console.log(nuevoNombre(arr => arr.map((nuevaCadena) => nuevaCadena + "!")));