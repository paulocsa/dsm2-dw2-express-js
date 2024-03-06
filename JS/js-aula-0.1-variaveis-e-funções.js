


var nome = "Paulo"
nome = "Carlos"

console.log(nome)

//mostra o tipo de variavel typeof(variavel)

console.log(typeof(nome))



nome2 = "Carlos"


//placeholder
console.log(`O nome do aluno é ${nome2}`)


//////////////////////////////////////
//funcoes

function minhaFuncao(){

}


console.log(typeof(minhaFuncao))



function minhaFuncao2(){
    console.log("Boa noite.")
}


minhaFuncao2()



//funcao com parametro/argumento


function minhaFuncao3(nome2){
    console.log(`Olá, boa noite ${nome2}`)
}


minhaFuncao3("Paulo")




//funcao com mais de um parametro

  
function soma ( n1,n2){
    let res = n1 + n2
    console.log(`A soma dos dois numeros foi ${res}`)

}


soma(5,2)


//funcao com retorno



function Soma(n1,n2){
    return n1 + n2
}

console.log(`A soma dos dois numeros foi ${Soma(2,3)}`)


//funcao com mais de um retorno 

function parimpar(n){
    if( n % 2 == 0){
        return "Par"
    }else{
        return "Impar"
    }
}

console.log(`O numero enviado é ${parimpar(2)}`)




//funcao anonima 


var dobro = function (x){
    return x*2
}

console.log(dobro(15))


//arrow function funcao anonima (num1, operador, num2) =>

const calc = (num1, operador, num2) =>{
    return eval(`${num1} ${operador} ${num2}`)
    
}
console.log(`O resultado da operação é ${calc(4,'*',5)}`)



//arrow function (=>)
const Calc  = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`)
} 

console.log(`O resultado da operação é ${Calc(5,'*',5)}`)



//arrow function com parametro unico =>

const Dobro = (x) => {
    return x*2
}

console.log(`O resultado da operação é ${Dobro(2)}`)






