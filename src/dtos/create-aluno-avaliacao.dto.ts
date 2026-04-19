import type { CreateAlunoDto } from "./create-aluno.dto.js";

export interface CreateAlunoAvaliacaoDto extends CreateAlunoDto {
  avaliacao: {
    disciplina: string;
    nota: number;
    idAluno: string;
    dtAvaliacao?: Date;
  };
}