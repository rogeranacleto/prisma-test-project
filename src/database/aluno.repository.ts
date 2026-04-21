import { prisma } from "../config/prisma.config.js"
import type { CreateAlunoDto } from "../dtos/create-aluno.dto.js";
import { handleError } from "../config/error.handler.js";
import type { UpdateAlunoDto } from "../dtos/update-aluno.dto.js";
export class AlunoRepository {
    
    // Listar todos os alunos
    public async list(){
        try{
            const alunos = prisma.aluno.findMany({
                select: {
                    id: true,
                    nome: true,
                    email: true,
                    avaliacoes: {
                        select: {
                            disciplina: true,
                            nota: true
                        }
                    }
                }
            });
            return alunos;
        }catch(error: any){ 
            return handleError(error)
        }
    }

    // Obter aluno pelo ID
    public async obterPorId(id: string){
        const aluno = await prisma.aluno.findUnique({
            where: {
                id
            },
            include: {
                avaliacoes: true
            }
        });

        return aluno
    } 

    // Criar um novo aluno
    public async criar(dados: CreateAlunoDto){
        try {
            const aluno = await prisma.aluno.create({
            data: dados
        })

         return aluno;
        } catch(error: any){
            return handleError(error)
        }
    }

    // Atualizar um aluno
    public async atualizar(id: string, dados: UpdateAlunoDto){
        try{
            const aluno = await prisma.aluno.update({
                where: {
                id,
                },
                data: dados,
            });
        }catch(error: any){
            return handleError(error)
        }
    }

    public async excluir(id: string){
        try{
            const alunoExcluido = await prisma.aluno.delete({
                where:{
                    id
                }
            });
            return alunoExcluido;
        }catch(error: any){ 
            return handleError(error)
        }
    }

}