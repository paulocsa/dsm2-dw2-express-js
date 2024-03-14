const converterSalario = salarioEmReal => {
    const taxaDolar = 0.20;
    const taxaEuro = 0.19;

    const salarioFormatado = valor => valor.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const salarioFormatadoEuro = valor => valor.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });

    console.log(`Salário em Real: ${salarioEmReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    console.log(`Salário em Dólar: ${salarioFormatado(salarioEmReal * taxaDolar / taxaEuro)}`);
    console.log(`Salário em Euro: ${salarioFormatadoEuro(salarioEmReal * taxaEuro / taxaDolar)}`);
}

converterSalario(1000);
