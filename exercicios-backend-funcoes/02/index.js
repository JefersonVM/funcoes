const console = require("console");
const carro = {
  ligado: false,
  velocidade: 0,
  ligar: function () {
    if (this.ligado) {
      console.log("Este carro já está ligado.");
    } else {
      this.ligado = true;
      console.log("O carro foi ligado.");
    }
    this.exibirStatus();
  },
  desligar: function () {
    if (this.ligado) {
      if (this.velocidade > 0) {
        console.log("O carro está em movimento, não é possível desligá-lo.");
      }
      if (this.velocidade === 0) {
        this.ligado = false;
        this.velocidade = 0;
        console.log("O carro foi desligado.");
      }
    } else {
      console.log("Este carro já está desligado.");
    }
    this.exibirStatus();
  },
  acelerar: function () {
    if (!this.ligado) {
      this.ligar();
    }
    this.velocidade += 10;
    console.log(`O carro está a ${this.velocidade} km/h.`);
    this.exibirStatus();
  },
  desacelerar: function () {
    if (this.ligado) {
      if (this.velocidade > 0) {
        this.velocidade -= 10;
        console.log(`O carro está a ${this.velocidade} km/h.`);
        if (this.velocidade === 0) {
          this.desligar();
        }
      } else {
        console.log("O carro já está parado.");
      }
    } else {
      console.log("Não é possível desacelerar um carro desligado.");
    }
    this.exibirStatus();
  },
  exibirStatus: function () {
    console.log(
      `Carro ${this.ligado ? "ligado" : "desligado"}. Velocidade: ${
        this.velocidade
      } km/h.`
    );
  },
};

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
