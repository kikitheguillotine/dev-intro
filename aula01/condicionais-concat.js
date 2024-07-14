// condicionais e concatenacao

const marido = "Joao";
const maridoIdade = 30;
const esposa = "Maria";

console.log(`${marido} e ${esposa}, casados e felizes para sempre!`);

// AVOIIIIIIDDD use this concat type
console.log(marido + " e " + esposa + ", casados e felizes para sempre!");

if (marido === "Joao") {
  console.log("Esposo igual Joao");
}

if (marido !== "Joao") {
  console.log("E diferente de Joao");
}

if (maridoIdade > 30) {
  console.log("Ta comecando a ficar velho ja");
}

if (maridoIdade === 30) {
  console.log("Trintou");
}

if (maridoIdade < 30) {
  console.log("E um nene");
}

if (marido === "Joao" && esposa === "Maria") {
  console.log("Casados lindos");
}

if (marido === "Joao" || esposa === "Mariaxisde") {
  console.log("Condicao OU");
}