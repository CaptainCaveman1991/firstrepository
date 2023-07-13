'use strict'

const inputOne = document.getElementById(`input_1`);
const inputTwo = document.getElementById(`input_2`);
const button_add = document.getElementById(`button_add`);
const button_subtract = document.getElementById(`button_subtract`);
const button_multiply = document.getElementById(`button_multiply`);
const button_divide = document.getElementById(`button_divide`);
const list = document.getElementById(`list_output`);


let outputlist =(str)=> {
    let element = document.createElement("li");
    element.innerHTML=str;
    list.appendChild(element)
}

let addition =(a,b)=> Number(a) + Number(b);
let subtraction =(a,b)=> Number(a) - Number(b);
let multiply =(a,b)=> Number(a) * Number(b);
let devision =(a,b)=> Number(a) / Number(b);

button_add.onclick =()=> outputlist( addition(inputOne.value,inputTwo.value));
button_subtract.onclick =()=> outputlist(subtraction(inputOne.value,inputTwo.value));
button_multiply.onclick =()=> outputlist(multiply(inputOne.value,inputTwo.value));
button_divide.onclick =()=> outputlist(devision(inputOne.value,inputTwo.value));

