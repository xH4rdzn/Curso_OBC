const car1 = prompt("Insira o nome do primeiro carro: ");
const vel1 = prompt("Insira a velocidade do primeiro carro:");

const car2 = prompt("Insira o nome do segundo carro: ");
const vel2 = prompt("Insira a velocidade do segundo carro:");

if (vel1 > vel2) {
  alert("O carro: " + " " + car1 + " é mais rápido que o " + car2);
} else if (vel1 < vel2) {
  alert("O carro: " + " " + car2 + " é mais rápido");
} else if (vel1 === vel2) {
  alert("A velocidade dos carros são iguais");
}
