console.log();

console.log("Exercicio 4 - Função com mais de um retorno");

const CalcIdade = (idade) => {
    if(idade >= 18){
        return "Maior de idade";
    }else{
        return "Menor de idade";
    }
}

console.log(`${CalcIdade(18)}`)