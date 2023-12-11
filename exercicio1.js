const pessoa = {
    nome: 'Ricardo',
    idade: 26,
    profissao: 'Programador',
    altura: 1.80
};

function apresentar (pessoa) {
    console.log(`Olá! meu nome é ${pessoa.nome}, sou um ${pessoa.idade < 12 ? 'criança' : 'jovem'} de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}.`);
}

apresentar(pessoa);