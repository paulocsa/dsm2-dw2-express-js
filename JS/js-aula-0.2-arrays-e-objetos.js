
// ao definir uma variavel let, nao pode definir outra variavel com o mesmo nome no mesmo bloco
let produto = "Computador";


//o comando typeof mostra o tipo da variavel
console.log(typeof(produto));


console.log();

//definindo um array vazio
let produtos = [];

console.log(typeof(produtos));



let Produtos = ['Computador','Notebook','Celular','Tablet'];

console.log(Produtos);

console.log('Exibindo o Array sem loop (indices)');
console.log(Produtos[0]);
console.log(Produtos[1]);
console.log(Produtos[2]);
console.log(Produtos[3]);
console.log();



//Exibindo o Array com uma estrutura de repetição for
console.log('Exibindo o Array com FOR com os indices');

for(let c in Produtos){
    // console.log(`${c} - ${Produtos[c]}`);
    
    console.log(`${Number(c)+1} - ${Produtos[c]}`);
    

}

console.log();


//Exibindo o Array com uma estrutura de repetição forEach com função anonima de arrow function)
console.log('Exibindo o Array com ForEach com indices');

Produtos.forEach((produto, i) => {
    i++;//ajusta o valor da ordem numerica de inicio no 0.
    console.log(i,"-", produto);
})

console.log();


//Exibindo o Array com uma estrutura de repetição forEach sem indices
console.log('Exibindo o Array com ForEach sem indices');

Produtos.forEach(produto => {
    
    console.log(produto);
})



///////////////////////////////

//OBJETOS LITERAIS

console.log();


const Product = {
    nome: 'Computador',
    marca: 'Lenovo',
    preco: 3000,
    descricao: 'PC moderno com bom desempenho'
};

console.log(Product);
console.log();
console.log(`O ${Product.nome} da marca ${Product.marca} cuista apenas R$ ${Product.preco} com a descrição: ${Product.descricao}`);


//ARRAY DE OBJETOS

const pList = [{}];

console.log(typeof(pList));

const productList = [{
    nome: 'Computador',
    marca: 'Lenovo',
    preco: 3000,
    descricao: 'Pc moderno com bom desempenho'
},
{
    nome: 'Tablet',
    marca: 'Sansung',
    preco: 3000,
    descricao: 'Otima velocidade de processamento'
},
{
    nome: 'Celular',
    marca: 'Apple',
    preco: 12000,
    descricao: 'Ultra resistente'
}]

console.log();
console.log(productList);
console.log();



//EXIBINDO ARRAY DE OBJETOS COM FOR EACH

productList.forEach(product =>{
    console.log(`Produto: ${product.nome}`);
    console.log(`Marca: ${product.marca}`);
    console.log(`Preço: ${product.preco}`);
    console.log(`Descrição: ${product.descricao}`);
    console.log();
});













