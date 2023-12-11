function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        return 'Maior de idade';
    } else {
        return 'Menor de idade';
    }
}

const retorno =  verificarMaiorIdade(18); 

console.log(retorno);// 'Maior de idade'

