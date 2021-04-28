let in1 = "Theres a lady";
let in2 = "All that glitters is gold";
let in3 = 8;
let in4 = 2;


//this function has 2 lines of a song and 2 numbers supposed to be add
function exerH(in1, in2, in3, in4) {
  return in1 + " " + in3 + in4 + " " + in2;
}

const result = exerH(in1, in2, in3, in4);

console.log(result)

//the difference between return and console.log is that return returns execution to the caller with optional result, and console.log, logs out information in console.
//actually theres nothing in common between them,  console.log will not influence the flow in our code.