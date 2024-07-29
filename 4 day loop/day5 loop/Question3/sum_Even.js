let number=parseInt(prompt("Enter a Number: "));
let count=0;
for (let i=1;i<=number;i++) {
    if(i%2==0){
         count+=i;
    }
      
}
console.log(count);