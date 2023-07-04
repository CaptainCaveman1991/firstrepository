// console.log("hello world")

// let mordor=["one", "does", "not","simpley", "walk", "into", "mordor"];
// console.log(mordor);

// mordor.pop();
// console.log(mordor);

// mordor.push("Rivendale");
// console.log(mordor);

// mordor.splice(7,"master", "bagins", "said", "boramir");
// console.log(mordor);

// mordor.reverse();
// console.log(mordor);

// mordor.unshift("today");
// console.log(mordor);

// mordor.shift();
// console.log(mordor);


// console.log(mordor.join("gandulf"));


// objects

const car={
    Name:  "Jill",
    Model: "Fiesta",
    Brand: "Ford",
    Reg: "kj45 9vl",
};

const car1={
    Name:  "Andy",
    Model: "Boxter",
    Brand: "Porche",
    Reg: "rf82 1nj",
};

const car2={
    Name:  "Sally",
    Model: "Polo",
    Brand: "VW",
    Reg: "gh49 0mg",
};

const car3={
    Name:  "Bill",
    Model: "Micra",
    Brand: "Nissan",
    Reg: "nc20 8il",
};

console.log(car);
console.log(car1);
console.log(car2);
console.log(car3);

car3.Reg="mc20 9il"; 
// amended the property
console.log(car3);

car3.doors=3;
console.log(car3);

console.log(car3["Reg"]);



// excercise

let=(x=1); 
while(x<1000){x++
    if(x==1000){
        console.log("True");
    } else if(x==50) {
        console.log("maybe");
    } else if(x==1001) {
        console.log("false");
    }
    }
console.log(x);


// functions
function greeting(firstname, surname){
    console.log("Hello, "+firstname + " " + surname)
}
greeting("Alexander", "Cave")

function add(number1, number2, number3){
    console.log(number1 + number2 + number3);
    return number1 + number2 + number3;
};

add(1,2,3);

function addition(number1, number2){
    return number1 + number2;
}
function subtract(number1, number2){
    return number1 - number2;
}
function devides(number1, number2){
    return number1 / number2;
}
function calculate(number1, number2, operation){
    console.log(number1, number2, operation);

    if("+" == operation){
        // let answer=addition(number1 ,number2)
        // console.log("answer" + " " + answer)
        console.log(`Answer: ${addition(number1, number2)}`)
    }
    //   console.log(addition(number1, number2))}
      else if("-" == operation){
        console.log(subtract(number1, number2))
      } else if("/" == operation){
        console.log(devides(number1, number2))
      }

    
}
calculate(1,2,"+")
calculate(8,7,"-")
calculate(8,7,"/")
