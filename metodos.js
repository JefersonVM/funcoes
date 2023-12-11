function calcularFaixaEtaria(idade) {}

function apresentarPessoa(pessoa) {
  return pessoa.apresentar();
}

const pessoa = {
  nome: "João",
  idade: 20,
  altura: 1.8,
  profissao: "Programador",
  apresentar: function () {
    return `Olá! Meu nome é ${this.nome}, sou um ${this.determinarFaixaEtaria(
      this.idade
    )} de ${this.idade} anos, ${this.altura}m de altura e sou ${
      this.profissao
    }.`;
  },
  determinarFaixaEtaria: function () {
    if (this.idade >= 0 && this.idade <= 12) {
      return "Criança";
    } else if (this.idade >= 13 && this.idade <= 18) {
      return "Adolescente";
    } else if (this.idade >= 19 && this.idade <= 60) {
      return "Adulto";
    } else if (this.idade >= 61 && this.idade <= 120) {
      return "Idoso";
    } else {
      return "Idade inválida";
    }
  },
};

console.log(apresentarPessoa(pessoa));
