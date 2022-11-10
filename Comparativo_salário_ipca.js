import entradaDados from 'readline-sync'

let label_ano = "Ano: "
let label_salario = "Salário mínimo: "
let label_inflacao = "Inflação IPCA: "
let crescimentoLabel = "Crescimento Salarial: ";

let salarioMinimo = [
    { ano: 2010, salario: 510 },
    { ano: 2011, salario: 545 },
    { ano: 2012, salario: 622 },
    { ano: 2013, salario: 678 },
    { ano: 2014, salario: 724 },
    { ano: 2015, salario: 788 },
    { ano: 2016, salario: 880 },
    { ano: 2017, salario: 937 },
    { ano: 2018, salario: 954 },
    { ano: 2019, salario: 998 },
    { ano: 2020, salario: 1045 },
];

let inflacoes = [
    { ano: 2010, inflacao: 5.91 },
    { ano: 2011, inflacao: 6.50 },
    { ano: 2012, inflacao: 5.84 },
    { ano: 2013, inflacao: 5.91 },
    { ano: 2014, inflacao: 6.41 },
    { ano: 2015, inflacao: 10.67 },
    { ano: 2016, inflacao: 6.29 },
    { ano: 2017, inflacao: 2.95 },
    { ano: 2018, inflacao: 3.75 },
    { ano: 2019, inflacao: 4.31 },
    { ano: 2020, inflacao: 4.52 },
];

console.log("Escolha uma das alternativas: \n");
console.log("1 - Listar os salários minímos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let opcao = entradaDados.question("Digite o numero da sua escolha: ");

if (opcao == 1) {

    for (let salarios of salarioMinimo) {

        let listaAno = salarios.ano;
        let listaSalario = salarios.salario;

        console.log("\n" + label_ano.padEnd(25, '.') + " " + listaAno);
        console.log(label_salario.padEnd(25, '.') + " R$ " + listaSalario + ",00\n");
    }

} else if (opcao == 2) {

    for (let ipca of inflacoes) {

        let listaAno = ipca.ano;
        let listaInflacoes = ipca.inflacao;

        console.log("\n" + label_ano.padEnd(25, '.') + " " + listaAno);
        console.log(label_inflacao.padEnd(25, '.') + " % " + listaInflacoes.toFixed(2).replace('.', ',') + "\n");

    }
} else if (opcao == 3) {


    for (let i = 0; i <= salarioMinimo.length - 1; i++) {
        let ano = salarioMinimo[i].ano;
        let salario = salarioMinimo[i].salario;
        let percentualCrescimento;
        let crescimentoFormatado;

        if (i > 0) {
            let salarioAnterior = salarioMinimo[i - 1].salario;
            let diferenca = salario - salarioAnterior;

            percentualCrescimento = (diferenca / salarioAnterior) * 100;

            crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".", ",") + "%";
        } else {
            crescimentoFormatado = "-";
        }

        let inflacao = inflacoes[i].inflacao;
        let salarioFormatado = salario.toFixed(2).replace(".", ",");
        let ipcaFormatado = inflacao.toFixed(2).replace(".", ",");

        console.log("\n");
        console.log(label_ano + ano);
        console.log(label_salario + "R$ " + salarioFormatado);
        console.log(crescimentoLabel + crescimentoFormatado);
        console.log(label_inflacao + ipcaFormatado + "%");

    }



} else {
    console.log("\nOpção Inválida");
}