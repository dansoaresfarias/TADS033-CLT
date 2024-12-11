import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn } from 'typeorm';
import { Filme } from './filme'

@Entity("Genero", { schema: "mobraLocadora" })
export class Genero {
    @PrimaryGeneratedColumn({ name: "idGenero", type: "int" })
    idGenero!: number;

    @Column({ type: "varchar", length: 45, nullable: false })
    nome: string;

    @ManyToMany(() => Filme)
    @JoinColumn({ name: 'Filme_idFilme' })
    filmes!: Filme[];

    constructor(nome: string, id?: number, filmes?: Filme[]) {
       
        this.nome = nome;
        if (id) this.idGenero = id;
        if (filmes) this.filmes = filmes;
    }
}