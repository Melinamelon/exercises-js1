const nombre = "Melina";
const nacimiento = 1990;

function saludo(nombre, nacimiento){
    let edad = 2021 - nacimiento;
    const mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años.";
    return mensaje;
}

console.log(saludo(nombre, nacimiento)+ " " + typeof saludo());