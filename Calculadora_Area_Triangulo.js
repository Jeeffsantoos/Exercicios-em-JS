import entradaDados from 'readline-sync';

console.log("Área do triângulo: \n");

let base = entradaDados.question("Informe a base: ")
let altura = entradaDados.question("Informe a altura: ")

console.log("\nVocê digitou a base: " + base);
console.log("Você digitou a altura: " + altura);

let area = (base * altura) / 2;

console.log("\nA área do triângulo é: " + area);