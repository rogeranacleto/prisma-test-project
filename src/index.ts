import { AlunoRepository } from "./database/aluno.repository.js";
import { AvaliacaoRepository } from "./database/avaliacao.repository.js";
const alunoReposiory = new AlunoRepository();
const avaliacaoRepository = new AvaliacaoRepository();
async function main(){
    // 1 - Listar todos os alunos
    // const alunos = await alunoReposiory.list();
    // console.log(alunos)

    //2 - Obter por ID
    // const aluno = await alunoReposiory.obterPorId("31d7fa0f-f9e3-4185-82a8-4124df5b1ea3")
    // console.log(aluno);

    // 3 - Criar um aluno
    // const alunoCriado = await alunoReposiory.criar({
    //     email: "joana@gmail.com",
    //     nome: "Joana",
    //     senha: "12312",
    //     rg: 123112
    // })
    // console.log(alunoCriado);   

    // 4 - Atualizar um aluno
    // const alunoAtualizado = await alunoReposiory.atualizar("12123",{
    //     nome: "Jonivaldo"
    // })

    // 5 - Excluir um aluno
    // const alunoExcluido = await alunoReposiory.excluir("31d7fa0f-f9e3-4185-82a8-4124df5b1ea3")
    // console.log(alunoExcluido)

    // 6 - Criar nova avaliacao
    // const novaAvaliacao = await avaliacaoRepository.criar({
    //   disciplina: "React",
    //   nota: 8,
    //   idAluno: "31d7fa0f-f9e3-4185-82a8-4124df5b1ea3",
    // });

    // 7 - Listar todas as avaliacoes
    // const avaliacoes = await avaliacaoRepository.listar();
    // console.log(avaliacoes)

    //8 - Criar aluno + avaliacao
    await avaliacaoRepository.criarAlunoAvaliacao({
        email: "bruna@gmail.com",
        nome: "Bruna",
        senha: "12313",
        rg: 12312,
        avaliacao: {
            idAluno: "123",
            disciplina: "React TX",
            nota: 10
        }
    })
}

main();