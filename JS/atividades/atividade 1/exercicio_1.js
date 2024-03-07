console.log();
console.log("Exercicio 1 - função simples");

function ExibirDadosPessoais(){
    const Dados = {
        nome: "Paulo",
        idade: 19,
        cidade: "Cajati"
    };

    console.log(`O meu nome é ${Dados.nome} e tenho ${Dados.idade} e moro na cidade de ${Dados.cidade}`);
}

ExibirDadosPessoais();