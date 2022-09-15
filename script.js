const prompt = require('prompt-sync')();
const calculator = require('./calculator'); 

console.log('----- BMI CALCULADORA-----');
console.log('Escreva seu peso');
const weightString = prompt(" >> ");
const weight = Number(weightString); 
console.log('Escreva sua altura');
const heightString = prompt (" >> ");
const height = Number(heightString);
console.log(`Seu imc é ${Math.floor(calculator(weight,height))}`);


