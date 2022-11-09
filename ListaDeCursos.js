let curso_idiomas = [
    { Nome: 'Inglês', Preco: 2500, CargaHoraria: 160 },
    { Nome: 'Espanhol', Preco: 1500, CargaHoraria: 110 },
    { Nome: 'Françês', Preco: 3600, CargaHoraria: 200 },
    { Nome: 'Chinês', Preco: 5500, CargaHoraria: 400 },
    { Nome: 'Alemão', Preco: 3800, CargaHoraria: 230 }
];

for (let cursos of curso_idiomas) {

    let nome = cursos.Nome;
    let hora = cursos.CargaHoraria;
    let preco_curso = cursos.Preco;
    let preco_hora = preco_curso / hora;

    console.log('Nome do curso : ' + nome);
    console.log('Carga horária do curso: ' + hora + " horas");
    console.log('Preço do curso : R$ ' + preco_curso + ",00");

    if (preco_hora > 15) {
        console.log('Hora/aula é superior igual a R$15,00\n');
    } else {
        console.log('Hora/aula é inferior igual a R$15,00\n');
    }

}