function calcIMC(peso, altura) {
  let imc = (peso/(altura*altura))
  return imc.toFixed(1);
}


let peso = 79.6;
let altura = 1.79;

let resultIMC = calcIMC(peso, altura)
console.log(resultIMC)