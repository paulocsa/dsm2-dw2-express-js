//4 – Crie uma função que receba uma idade como parâmetro. Se a idade for >= 18, a função deve retornar o valor “Maior de idade”, se não deve retornar “Menor de idade”. O resultado deve ser exibido no console.

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