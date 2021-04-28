function vacuna100(pais, poblacion, vacunados){
    let cmil = "En " + pais + " se han vacunado " + (vacunados/poblacion)*100 + " por cada cien habitantes"
    return cmil;
}

console.log(vacuna100("España", 120, 34));