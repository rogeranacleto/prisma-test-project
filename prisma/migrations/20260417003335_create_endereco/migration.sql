-- CreateTable
CREATE TABLE "Endereco" (
    "id" TEXT NOT NULL,
    "rua" VARCHAR(30) NOT NULL,
    "bairro" VARCHAR(30) NOT NULL,
    "numero" INTEGER NOT NULL,
    "cidade" VARCHAR(50) NOT NULL,
    "id_aluno" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_id_aluno_key" ON "Endereco"("id_aluno");

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
