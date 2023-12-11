function calcularFaixaEtaria(idade) {
  if (idade >= 0 && idade <= 12) {
    return "Criança";
  } else if (idade >= 13 && idade <= 18) {
    return "Adolescente";
  } else if (idade >= 19 && idade <= 60) {
    return "Adulto";
  } else if (idade >= 61 && idade <= 120) {
    return "Idoso";
  } else {
    return "Idade inválida";
  }
}

function apresentarPessoa(nome, idade, altura, profissao) {
  return `Olá! Meu nome é ${nome}, sou um ${calcularFaixaEtaria(
    idade
  )} de ${idade} anos, ${altura}m de altura e sou ${profissao}.`;
}

console.log(apresentarPessoa("Jeferson", 42, 1.86, "Desenvolvedor"));
