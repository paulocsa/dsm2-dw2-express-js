//2 – Crie uma função que receba dois números como parâmetro em seguida faça a divisão entre eles. O resultado deve ser exibido no console concatenado com uma string. (Ex: “O resultado da divisão foi...”). A função deve ser chamada ao final passando dois números como argumento.

console.log();

console.log("Exercicio 2 - Função com parametros");

function divisao(n1,n2){
    let resultado = n1/n2;
    console.log(`A divisão do ${n1} por ${n2} é ${resultado}`);
}

divisao(10,2);