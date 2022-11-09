let data_atual = new Date();
let mes_atual = data_atual.getMonth();


let chuva_meteoros_trimestre_1 = "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03";

let chuva_meteoros_trimestre_2 = "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06";

let chuva_meteoros_trimestre_3 = "Eta Líridas começa em 19/08 e termina em 22/08\nAlfa Capricornídeos começa em 13/09 e termina em 17/09";

let chuva_meteoros_trimestre_4 = "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\nPerseidas começa em 27/12 e termina em 31/12";

if (mes_atual == 00 || mes_atual == 01 || mes_atual == 02) {
    console.log("As chuvas de meteoros do primeiro trimestre são :\n\n" + chuva_meteoros_trimestre_1)
} else if (mes_atual == 03 || mes_atual == 04 || mes_atual == 05) {
    console.log("As chuvas de meteoros do segundo trimestre são :\n\n" + chuva_meteoros_trimestre_2)
} else if (mes_atual == 06 || mes_atual == 07 || mes_atual == 08) {
    console.log("As chuvas de meteoros do terceiro trimestre são :\n\n" + chuva_meteoros_trimestre_3)
} else if (mes_atual == 09 || mes_atual == 10 || mes_atual == 11) {
    console.log("As chuvas de meteoros do quarto trimestre são :\n\n" + chuva_meteoros_trimestre_4)
} else {
    console.log("Nenhuma chuvade meteoro no período informado")
}