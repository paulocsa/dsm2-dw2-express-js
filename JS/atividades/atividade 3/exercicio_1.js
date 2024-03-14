// 1 – Crie uma função que a partir da data atual, exiba no console uma nova data da seguinte forma:
// - Uma semana a mais do que o dia atual.
// - Cinco meses a mais do que o mês atual.
// - Dois anos a mais do que o ano atual.
// O formato da data deve ser exibida no padrão dia/mês/ano.


const dataAtual = new Date();

const calcData = () => {
    
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth()+1;
    let ano = dataAtual.getFullYear();


    console.log(`Uma semana após o dia ${dia} é dia ${Number(dia+7)}.`); 

    console.log(`Cinco meses após o mes ${mes} é mês ${Number(mes+5)}.`);

    console.log(`Dois anos apos o ano de ${ano} é: ${Number(ano+2)}.`);

    console.log(`A data atual é: ${dia}/${mes}/${ano}`);

}

calcData();






