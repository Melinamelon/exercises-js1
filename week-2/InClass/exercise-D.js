let Happy = ":)";
let Shy = ">///<";
let Sad = ":c";
let Angry = ">_<";
let Confused = "._?";
let Disappointed = "u.U";
let Mad = "ò.ó";
let Tired = "-.-";
let Crying = "T.T";
let Surprised = ":O";


function howAmI(mood) {
    if (mood === "Happy") {
        return "Im feeling " + Happy;
    } else if (mood == "Sad") {
        return "Im feeling " + Sad;
    } else if (mood == "Shy") {
        return "Im feeling " + Shy;
    } else if (mood == "Angry") {
        return "Im feeling " + Angry;
    } else if (mood == "Confused") {
        return "Im feeling " + Confused;
    } else if (mood == "Disappointed") {
        return "Im feeling " + Disappointed;
    } else if (mood == "Mad") {
        return "Im feeling " + Mad;
    } else if (mood == "Tired") {
        return "Im feeling " + Tired;
    } else if (mood == "Crying") {
        return "Im " + Crying;
    } else if (mood == "Surprised") {
        return "Im " + Surprised;
    } else {
        return `${mood} isn't even a mood`;
    }
}


console.log(howAmI("Surprsed"))



