import entradaDados from 'readline-sync';

console.log("\nAplicação de Juros:");
let juros;
let entrada_valor = entradaDados.question("\nInforme o valor devido: R$ ");

if (entrada_valor > 0) {


    let dias_corridos = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

    if (dias_corridos > 0) {

        entrada_valor = Number(entrada_valor);
        dias_corridos = Number(dias_corridos);

        if (dias_corridos > 15) {
            juros = 10;

        } else {
            juros = 5;
        }

        let valorJuros = (entrada_valor / 100) * juros;
        let totalDivda = entrada_valor + valorJuros;

        console.log("\nValor original da dívida: R$ " + entrada_valor)
        console.log("Dias atrasados: " + dias_corridos)
        console.log("Taxa de Juros: " + juros + "%")
        console.log("Valor total com juros: R$ " + totalDivda)
    } else {
        console.log("Você está em dia!");
    }
} else {
    console.log("O valor da dívida deve ser maior que zero!")
}