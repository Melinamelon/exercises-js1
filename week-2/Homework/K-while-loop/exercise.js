/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop

*/

let n = 31;

function sumTillNum(num) {
	//your code here
	let x = 0;
	let sum = 0;
	while (x <= num) {
		sum = sum + x;
		x = x + 1;
	}
	return sum;
}

let m = 31;

function sumTillNum2(number) {
	let suma = [];
	for (let number = 0;
		number <= 10;
		number++) {
		suma.push(number);
	}
	return suma.join(" + ");
}

let z = 10;


function sumTillNum3(numb) {
	let sum = 0;
	while (numb > 0) {
		sum = sum + numb;
		numb--;
	}
	return sum
}



console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));
console.log("Sum from 0 to " + m + " is: " + sumTillNum2(m));
console.log("Sum from 0 to " + n + " is: " + sumTillNum3(z));