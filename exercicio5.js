function mediaPonderada(nota, peso) {
  let n1 = parseFloat(prompt("Informe a primeira nota: "));
  let p1 = parseFloat(prompt("Informe o peso primeira nota: "));
  let n2 = parseFloat(prompt("Informe a segunda nota: "));
  let p2 = parseFloat(prompt("Informe o peso segunda nota: "));
  let n3 = parseFloat(prompt("Informe a terceira nota: "));
  let p3 = parseFloat(prompt("Informe o peso terceira nota: "));

  return ((n1*p1 + n2*p2 + n3*p3) / p1 + p2 + p3);
}

let media = mediaPonderada();
console.log("Media Ponderada: " + media);
