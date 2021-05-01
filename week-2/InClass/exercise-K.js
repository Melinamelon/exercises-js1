let arrStudent = ["Melina", "Anandamaya", "Henriette", "Webber", "Cipri"];
function getNameStudent(arr) {
    for (x in arr) {
        console.log("El nombre del estudiante " + (parseInt(x) + 1) + " es: " + arr[x]);
    }
}
console.log(getNameStudent(arrStudent));


const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

for (let i = 0; i < daysOfWeek.length; i++) {
    const dayMessage = "day is: " + daysOfWeek[i];
    const indexMessage = "index is: " + i;
    console.log(indexMessage, dayMessage);
}