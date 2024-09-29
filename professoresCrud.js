let professores = [];

function createProfessor (professor) {
    professores.push(professor);
    console.log("professor adicionado com sucesso:", professor);
}

function readProfessores() {
    if (professores.length === 0) {
        console.log("nenhum professor cadastrado.");
    } else {
        console.log("lista de professores:", professores);
    }
}

function updateProfessor(index, professorAtualizado) {
    if (index >= 0 && index < professores.length) {
        professores[index] = professorAtualizado;
        console.log(`Professor no índice ${index} atualizado para:`, professorAtualizado);
    } else {
        console.log("Índice inválido. Atualização falhou.");
    }
}

function deleteProfessor(index) {
    if (index >= 0 && index < professores.length) {
        let professorRemovido = professores.splice(index, 1);
        console.log(`Professor no índice ${index} removido:`, professorRemovido);
    } else {
        console.log("Índice inválido. Remoção falhou.");
    }
}

createProfessor({ id: 1, nome: "Pedro Borges", disciplina: "Banco de dados"});
createProfessor({ id: 2, nome: "Silas Silva", disciplina: "Avaliação de Interfaces"});
createProfessor({ id: 3, nome: "Pedro Borges", disciplina: "Desenvolvimento de API's"});
createProfessor({ id: 4, nome: "Naan Silva", disciplina: "Tecnicas Ágeis"});

readProfessores();

updateProfessor(0,{ id: 1, nome: "Pedro Borges", disciplina: "Banco de dados NOSQL"});

deleteProfessor(1);

readProfessores();