function cadastro() {
  let aluno = {};

  aluno.nome = prompt("Nome do aluno: ");
  aluno.idade = prompt("Idade do aluno: ");

  console.log("Aluno: " + aluno.nome)
  console.log("Idade: " + aluno.idade)
}

cadastro();