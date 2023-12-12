const console = require("console");

const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000,
    },
  ],
  calcularTotalDeItens: function () {
    let totalDeItens = 0;

    this.produtos.forEach((produto) => {
      totalDeItens += produto.qtd;
    });

    return totalDeItens;
  },
  calcularTotalAPagar: function () {
    let totalAPagar = 0;

    this.produtos.forEach((produto) => {
      totalAPagar += produto.qtd * produto.precoUnit;
    });

    return totalAPagar;
  },
  addProduto: function (produto) {
    const produtoJaExiste = this.produtos.find((p) => p.id === produto.id);

    if (produtoJaExiste) {
      produtoJaExiste.qtd += produto.qtd;
    } else {
      this.produtos.push(produto);
    }
  },

  imprimirDetalhes: function () {
    const nomeDoCliente = this.nomeDoCliente;

    const totalAPagar = this.calcularTotalAPagar();
    const totalDeItens = this.calcularTotalDeItens();

    console.log(`Cliente: ${nomeDoCliente}`);

    this.produtos.forEach((produto, id) => {
      console.log(
        `Item ${id + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${(
          produto.precoUnit / 100
        ).toFixed(2)}`
      );
    });

    console.log(`Total de itens: ${totalDeItens} itens`);
    console.log(`Total a pagar: R$ ${(totalAPagar / 100).toFixed(2)}`);
  },
  calcularDesconto: function () {
    const totalAPagar = this.calcularTotalAPagar();
    const totalDeItens = this.calcularTotalDeItens();

    if (totalDeItens >= 4 && totalDeItens <= 8) {
      return totalAPagar * 0.9;
    } else if (totalDeItens > 8) {
      return totalAPagar * 0.85;
    } else {
      return totalAPagar;
    }
  },
};

const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};

carrinho.addProduto(novaBermuda);

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};

carrinho.addProduto(novoTenis);
carrinho.imprimirDetalhes();
