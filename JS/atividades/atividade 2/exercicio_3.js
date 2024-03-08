//3 – Crie um array de objetos de filmes com no mínimo 3 filmes. Cada filme deve possuir no mínimo 4 chaves, por exemplo, título, gênero, ano e classificação de idade. Em seguida, exiba o array de objetos através de uma estrutura forEach.

console.log();

console.log("Exercicio 3 - Array de objetos");

console.log();

const filmes =[{
    titulo:"Avatar",
    genero:"Ficção científica/Ação",
    ano: 2009,
    classificacaoDeIdade:12
},
{
    titulo:"Carros",
    genero:"Infantil/Comédia",
    ano: 2006,
    classificacaoDeIdade: "Livre"
},
{
    titulo:"Bee Movie - A História de uma Abelha",
    genero:"Infantil/Comédia",
    ano: 2007,
    classificacaoDeIdade: "Livre"
}
];


filmes.forEach(filme =>{
    console.log(`Titulo: ${filme.titulo}`);
    console.log(`Genero: ${filme.genero}`);
    console.log(`Ano: ${filme.ano}`);
    console.log(`Classificação de idade: ${filme.classificacaoDeIdade}`);
    console.log();

});

