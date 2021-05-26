let exerI = [100, "iSMael", 55, 45, "sANyiA", 66, "JaMEs", "eLAmIn", 23, "IsMael", 67, 19, "ElaMIN",];


function formater(stuff){
    return stuff.toUpperCase();
}

for (x in exerI){
    exerI[x] = formater(exerI[x]);
}
console.log(formater(exerI))

