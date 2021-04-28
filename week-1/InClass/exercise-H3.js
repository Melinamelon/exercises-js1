const namem = "Meli";
const birthyear = 1990;

function introducingMyself (namem, year, birthyear){
    let year = 2021 - birthyear;
    const frase = "Mi nombre is " + namem + " y tengo " + year;
    return frase;
}

console.log(introducingMyself(namem, year));