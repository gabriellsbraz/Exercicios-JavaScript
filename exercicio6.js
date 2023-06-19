function nomeCompleto() {
  let firstName = prompt("Digite seu primeiro nome:");
  let lastName = prompt("Digite seu sobrenome:");

  let nomeCompleto = firstName + " " + lastName;

  console.log("Nome completo: " + nomeCompleto);
}

nomeCompleto();