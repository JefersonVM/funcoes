function verificarFaixaEtaria(idade) {
    if (idade >= 0 && idade < 12) {
        return "Criança";
    } else if (idade >= 12 && idade < 18) {
        return "Adolescente";
    } else if (idade >= 18 && idade < 60) {
        return "Adulto";
    } else if (idade >= 60) {
        return "Idoso";
    } else {
        return "Idade inválida";
    }
}

const faixa1 = verificarFaixaEtaria(10);
const faixa2 = verificarFaixaEtaria(25);
const faixa3 = verificarFaixaEtaria(50);
const faixa4 = verificarFaixaEtaria(80);

console.log(faixa1); // Criança
console.log(faixa2); // adulto
console.log(faixa3); // Adulto
console.log(faixa4); // Idoso