const medida = prompt("Insira a medida: (EM METROS)");
const medidaFinal = prompt(
  "Insira para qual medida você quer converter:  \n sendo (mm) para milimetros, (cm) para centimetros,(dm) para decímetro, (dam) para decâmetro, (hm) para hectômetro e (km) para quilômetro."
);

let resultado = 0;

switch (medidaFinal) {
  case "mm":
    resultado = medida * 1000;
    alert(
      "A medida inserida convertida para " +
        medidaFinal +
        " é de: " +
        " " +
        resultado +
        medidaFinal
    );
    break;
  case "cm":
    resultado = medida * 100;
    alert(
      "A medida inserida convertida para " +
        medidaFinal +
        " é de: " +
        " " +
        resultado +
        medidaFinal
    );
    break;
  case "dm":
    resultado = medida * 10;
    alert(
      "A medida inserida convertida para " +
        medidaFinal +
        " é de: " +
        " " +
        resultado +
        medidaFinal
    );
    break;
  case "dam":
    resultado = medida / 10;
    alert(
      "A medida inserida convertida para " +
        medidaFinal +
        " é de: " +
        " " +
        resultado +
        medidaFinal
    );
    break;
  case "hm":
    resultado = medida / 100;
    alert(
      "A medida inserida convertida para " +
        medidaFinal +
        " é de: " +
        " " +
        resultado +
        medidaFinal
    );
    break;
  case "km":
    resultado = medida / 1000;
    alert(
      "A medida inserida convertida para " +
        medidaFinal +
        " é de: " +
        " " +
        resultado +
        medidaFinal
    );
    break;
  default:
    alert("Opção Inválida");
}
