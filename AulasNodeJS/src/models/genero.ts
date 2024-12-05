import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("Genero", { schema: "mobraLocadora" })
export class Genero {
    @PrimaryGeneratedColumn({ name: "idGenero", type: "int"})
    idGenero?: number;

    @Column({ type: "varchar", length: 45, nullable: false })
    nome: string;

    constructor(id: number, nome: string) {
        this.idGenero = id;
        this.nome = nome;
    }
}