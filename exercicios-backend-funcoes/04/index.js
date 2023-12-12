const contaBancaria = {
  nome: "Maria",
  saldo: 0,
  historicos: [],
  depositar: function (valor) {
    this.saldo += valor;
    this.historicos.push({
      tipo: "Depósito",
      valor: valor,
    });
    
    
     return `Deposito de R$${(valor / 100).toFixed(2)} realizado para o cliente ${
        this.nome
      }`

  },
  sacar: function (valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      this.historicos.push({
        tipo: "Saque",
        valor: valor,
      });
      
      
      return  `Saque de R$${(valor / 100).toFixed(2)} realizado para o cliente ${this.nome}`
       
    } else {
        
      return `Saldo insuficiente para o saque de: ${this.nome}`
      
    }
  },
extrato: function () {
    let extrato = `Extrato de ${this.nome} - Saldo: R$${(this.saldo / 100).toFixed(2)}\nHistórico:\n`;
    this.historicos.forEach((historico) => {
        extrato += `${historico.tipo} de R$${(historico.valor / 100).toFixed(2)}\n`;
    });
    return extrato;
},
};

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
