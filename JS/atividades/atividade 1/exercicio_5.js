//5 – Crie uma função anônima que receba duas notas como parâmetro. Se a média dessas notas for <=5, a função deve retornar o valor “Reprovado”, se não deve retornar o valor “Aprovado”.  O resultado deve ser exibido no console. Considere média = (nota1 + nota2) / 2.

console.log();

console.log("Exercicio 5 - Função anônima");


var media = function (n1,n2){
    return ((n1+n2)/2);
}

console.log(`O resultado media das notas é ${media(5,10)}`);