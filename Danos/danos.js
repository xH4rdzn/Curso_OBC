const person1 = prompt("Insira o nome do primeiro personagem:");
const atk = prompt("Insira o poder de ataque do personagem 1:");

const person2 = prompt("Insira o nome do personagem de defesa:");
let vidaPerson2 = prompt(
  "Insira a quantidade de pontos de vida do segundo personagem:"
);
const def = prompt(
  "Insira a quantidade de pontos de defesa do segundo personagem:"
);
const escudo = prompt("O segundo personagem tem escudo ? (Sim/Não)");

let danoCausado = 0;

if (atk > def && escudo === "Não") {
  danoCausado = atk - def;
} else if (atk > def && escudo === "Sim") {
  danoCausado = (atk - def) / 2;
}

vidaPerson2 -= danoCausado;

alert(person1 + " causou " + danoCausado + " pontos de dano em " + person2);
alert(
  person1 +
    "\n Poder de ataque: " +
    atk +
    "\n\n" +
    person2 +
    "\n Pontos de vida: " +
    vidaPerson2 +
    "\n Poder de defesa: " +
    def +
    "\n Possui escudo: " +
    escudo
);
