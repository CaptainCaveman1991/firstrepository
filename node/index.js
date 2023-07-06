

const colors = require("colors/safe")

console.log(colors.rainbow("hello world!"));
console.log(colors.red("bonjour!"));
console.log(colors.america("howdyhi!"));
console.log(colors.random("howdyhi!"));
console.log(colors.bgGreen("howdyhi!"));
console.log(colors.bgMagenta("howdyhi!"));


let x=0;
while(x<=100){
    console.log(colors.bgCyan(x))
    x++
};


// for(let x=1; x<101; x++){
    // if(x==15) console.log(colors.america("FizzBuzz"));
    // else if(x%3==0) console.log(colors.red("Fizz"));
    // else if(x%5==0) console.log(colors.green("Buzz"));
    // else if(x%7==0) console.log(colors.blue("Zing"));
    // else if(x%3!=0 && x%5!=0 && x%7!=0) console.log(colors.america("I am not a multipul 3,5,7"));
    // else console.log(x);
// };

for(let x=1; x<101; x++){
    if(x%3==0 && x%5==0) console.log(colors.red("FizzBuzz"));
    else if(x%3==0 && x%7==0) console.log(colors.green("Fizzing"));
    else if(x%5==0 && x%7==0) console.log(colors.blue("Buzzing"));
    else if(x%3!=0 && x%5!=0 && x%7!=0) console.log(colors.america("I am not a multipul 3,5,7"));
    else console.log(x);
};