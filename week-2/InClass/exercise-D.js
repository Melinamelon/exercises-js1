let Happy = ":)";
let Shy = ">///<";
let Sad = "like if every cloud has a silver lining :c";
let Angry = ">_<";
let Confused = "._?";
let Disappointed = "u.U";
let Mad = "ò.ó";
let Tired = "-.-";
let Crying = "T.T";
let Surprised = ":O";


function howAmI(mood) {
    if (typeof mood === "number") {
        return "Beep beep boop";
    } else if (typeof mood === "string") {
        let a = mood.toLowerCase();
        if (a === "happy") {
            return `Good job, you're doing great! ` + Happy;
        } else if (a === "sad") {
            return `Every cloud has a silver lining` + Sad;
        } else if (a === "shy") {
            return "Im feeling " + Shy;
        } else if (a === "angry") {
            return "Im like " + Angry;
        } else if (a === "confused") {
            return "Im feeling " + Confused;
        } else if (a == "disappointed") {
            return "Im feeling " + Disappointed;
        } else if (a == "mad") {
            return "Im feeling " + Mad;
        } else if (a == "tired") {
            return "Im feeling " + Tired;
        } else if (a == "crying") {
            return "Im " + Crying;
        } else if (a == "surprised") {
            return "Im " + Surprised;
        } else {
            return mood + "?? really? I'm sorry, I'm still learning about feelings!";
        }
    } else {
        return mood + "?? really? I'm sorry, I'm still learning about feelings!";
    }

}



console.log(howAmI("Sad"));
console.log(howAmI(8));
console.log(howAmI(null));
console.log(howAmI("mad"));
console.log(howAmI("Mad"));
console.log(howAmI("lol"));