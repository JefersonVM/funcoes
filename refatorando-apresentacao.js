const pessoa1 = {
  nome: "Rebeca",
  idade: 31,
  profissao: "Designer",
};

const pessoa2 = {
  nome: "João",
  idade: 25,
  profissao: "Programador",
};

const pessoa3 = {
  nome: "Maria",
  idade: 28,
  profissao: "Analista",
};

function verificarFaixaEtaria(pessoa) {
  if (pessoa.idade >= 0 && pessoa.idade < 25) {
    console.log(
      `Meu nome é ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}. `
    );
  } else if (pessoa.idade >= 25 && pessoa.idade < 65) {
    console.log(
      `Meu nome é ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}. `
    );
  } else if (pessoa.idade >= 65) {
    console.log(
      `Meu nome é ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}. `
    );
  }
}

verificarFaixaEtaria(pessoa1);
verificarFaixaEtaria(pessoa2);
verificarFaixaEtaria(pessoa3);
