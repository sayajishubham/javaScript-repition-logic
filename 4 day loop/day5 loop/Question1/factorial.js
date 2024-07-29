let num=parseInt(prompt("Enter a Number: "));
let fact=1;
let i=1;
while (i<=num) {
    fact*=i;
    i++;
    
}
console.log(`The Factorial number is ${fact}`);