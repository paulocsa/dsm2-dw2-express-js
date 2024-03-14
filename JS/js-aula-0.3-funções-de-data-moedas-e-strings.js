// OBJETO LITERAL

const carro = {
    // ATRIBUTOS
    marca: "Ford",
    modelo: "Focus",
    ano: 2014,

    // METODOS
    buzinar(){
        return "Beep! Beep!";
    }
}

// O que é um objeto literal? um objeto literal nao é definido a partir de uma classe, ele é modelado no mesmo momento.

console.log(carro.marca, carro.modelo);
console.log(carro.buzinar());



// CLASSE 
class Carro {

// ATRIBUTOS
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    // METODOS

    buzinar(){
        return "Beep! Beep!";
    }
}

// CRIANDO UMA INSTANCIA(OBJETO) DA CLASSE CARRO
const carroPopular = new Carro();
carroPopular.marca = "Fiat";
carroPopular.modelo = "Uno";
carroPopular.ano = "2012";

console.log();
console.log(carroPopular.marca);
console.log(carroPopular.modelo);
console.log(carroPopular.ano);
console.log(carroPopular.buzinar());


// CARRO ESPORTIVO 

const carroEsportivo = new Carro()
carroEsportivo.marca = "Chebrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2014";

console.log();
console.log(carroEsportivo.marca);
console.log(carroEsportivo.modelo);
console.log(carroEsportivo.ano);
console.log(carroEsportivo.buzinar());



// MANIPULANDO DATAS NO JAVASCRIPT
console.log();
const dataAtual = new Date();
console.log(typeof(dataAtual));
console.log();

// PEGANDO O DIA ATUAL
const dia = dataAtual.getDate();
console.log(`Hoje é dia ${dia}`);

// PEGANDO O MES ATUAL
const mes = dataAtual.getMonth()+1;//è somado +1 na variavel pois o contator de meses começa no 0, e para corrir soma-se 1, para ficar 1(Janeiro),2(fevereiro);
console.log(`Estamos no mes ${mes}`);

const ano = dataAtual.getFullYear();
console.log(`Ano atual: ${ano}`);

console.log(`${dia}/0${mes}/${ano}`);

console.log();

//////////////////////////////////////////

// MANIPULANDO MOEDAS COM JAVASCRIPT

let salario = 2500.30;
//MOSTRA O VALOR DO SALARIO
console.log(salario);
console.log();

// MOSTRA O VALOR DO SALARIO COM VIRULA
console.log(salario.toFixed(2));
console.log();

// MODESTRA O VALOR DO SALARIO SEM VIRGULA
console.log(salario.toFixed(0));
console.log();

// MOSTRA A VIRGULA NO LUGAR DE PONTO
console.log(salario.toFixed(2).replace('.',','));
console.log();

// MOSTRA O VALOR DO SALARIO NO PADRAO BRASILEIRO
console.log(salario.toLocaleString('pt-br',{style: 'currency',currency: 'BRL'}));
console.log();

// MOSTRA O VALOR DO SALARIO NO PADRAO AMERICANO
console.log(salario.toLocaleString('pt-br',{style: 'currency',currency: 'USD'}));
console.log();

// MOSTRA O VALOR DO SALARIO NO PADRAO EUROPEU
console.log(salario.toLocaleString('pt-br',{style: 'currency',currency: 'EUR'}));
console.log();

///////////////////////////////////////////////////////////////////
// FORMATANDO STRINGS

const nome = "Paulo Candiani";
// DEIXA TODAS AS LETRAS EM MAIUSCULO
console.log(nome.toUpperCase());
// DEIXA TODAS AS LETRAS EM MINUSCULO
console.log(nome.toLowerCase());
// CONTA A QUANTIDADE DE CARACTERS CONTANDO COM ESPAÇO
console.log(nome.length);

// PODE-SE UTILIZAR LENGTH PARA VER A QUANTIDADE DADOS EM UM ARRAY

const lista = ['Maçã', 'Banana', 'Morango'];
console.log(lista.length);












