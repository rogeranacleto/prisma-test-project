import { handleError } from "../config/error.handler.js";
import { prisma } from "../config/prisma.config.js";
import type { CreateAlunoAvaliacaoDto } from "../dtos/create-aluno-avaliacao.dto.js";
import type { CreateAvaliacaoDto } from "../dtos/create-avaliacao.dto.js";
import { AlunoRepository } from "./aluno.repository.js";
export class AvaliacaoRepository {
    public async criar(dados: CreateAvaliacaoDto){   
        try{
            const alunoReposiory = new AlunoRepository();
            const aluno = await alunoReposiory.obterPorId(dados.idAluno);
            if(!aluno){
                console.log("ERRO: O aluno nao existe!")
                return null;
            }
            const avaliacao = await prisma.avaliacao.create({
                data: dados
            })
        }catch(error: any){
            return handleError(error)
        }
    }

    public async listar(){
        try{
            const avaliacoes = await prisma.avaliacao.findMany({
                include: {
                    aluno: {
                        select: {
                            nome: true,
                            email: true
                        }
                    }
                }
            });
            return avaliacoes;
        }catch(error: any){
            return handleError(error)
        }
    }

    public async criarAlunoAvaliacao(dados: CreateAlunoAvaliacaoDto){
        try{
            await prisma.$transaction(async (tx) => {
                //1 - Criar aluno
                const aluno = await tx.aluno.create({
                    data: dados
                })

                await tx.avaliacao.create({
                  data: {
                    ...dados.avaliacao,
                    idAluno: aluno.id
                  }
                });
            })
            
        }catch(error){
            return handleError(error)
        }
    }
}