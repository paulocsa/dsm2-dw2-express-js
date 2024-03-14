const formatarNome = nome => {
    const nomeMaiusculo = nome.toUpperCase();
    const nomeMinusculo = nome.toLowerCase();
    const numeroLetras = nome.length;

    console.log("Nome em letras maiúsculas:", nomeMaiusculo);
    console.log("Nome em letras minúsculas:", nomeMinusculo);
    console.log("Número de letras:", numeroLetras);
}

formatarNome("Exemplo");
