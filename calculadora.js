const num1 = prompt("Informe o primeiro Número:");
const num2 = prompt("Informe o segundo número:");

const x = parseFloat(num1);
const y = parseFloat(num2);

const soma = x + y;
const subtracao = x - y;
const mult = x * y;
const div = x / y;

alert(
  "Os resultados obtidos são: \n" +
    "\n Soma: " +
    soma +
    "\n Subtração: " +
    subtracao +
    "\n Multiplicação: " +
    mult +
    "\n Divisão: " +
    div
);
