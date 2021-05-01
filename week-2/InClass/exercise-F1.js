function userValid(name, type) {
    let firstLetter = name.charAt(0);
    let nameLength = name.length;

    // if ((firstLetter === firstLetter.toUpperCase() && nameLength >= 5 && nameLength <= 10)
    //     &&
    //     (type.toLowerCase) === "admin" || type.toLowerCase() === "manager")


        if ((firstLetter === firstLetter.toUpperCase() && nameLength >= 5 && nameLength <= 10) ||
            (type.toLowerCase() === "admin" || type.toLowerCase() === "manager")) {
            return "Username valid";
        } else {
            return "Username invalid";
        }
}

console.log(userValid("melina", "admin")); // valid
console.log(userValid("melina", "manager")); // valid
console.log(userValid("melina", "junior")); // invalid
console.log(userValid("Melina", "junior")); // valid
console.log(userValid("Melina", "Admin")); // valid
console.log(userValid("melina", "Admin")); // valid
console.log(userValid("Li", "admin")); // valid
console.log(userValid("Li", "junior")); // invalid
console.log(userValid("Aeronaticos", "junior")); // invalid
console.log(userValid("Supersonicos", "admin")); // valid