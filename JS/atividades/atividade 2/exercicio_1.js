// 1 – Crie um vetor contendo os nomes de todos os estados brasileiros. Em seguida, exiba esse vetor na tela através de uma estrutura forEach. Os índices do vetor também devem ser exibidos.

console.log();

console.log("Exercicio 1 - Array");

console.log();


let Estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];



Estados.forEach((estado,i) => {
    i++;//ajusta o valor da ordem numerica de inicio no 0.
    console.log(i,"-",estado);
})
