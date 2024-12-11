import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn } from 'typeorm';
import { Genero } from "./genero"

@Entity('Filme')
export class Filme {
  @PrimaryGeneratedColumn({ name: 'idFilme' })
  idFilme!: number;

  @Column({ length: 80 })
  tituloOriginal: string;

  @Column({ length: 80, nullable: true })
  tituloPT?: string;

  @Column({ type: 'decimal', precision: 3, scale: 2 })
  preco: number;

  @Column({ type: 'time' })
  duracao: string;

  @Column()
  ano: number;

  @Column({ length: 5 })
  faixaEtaria: string;

  @ManyToMany(() => Genero)
  @JoinColumn({ name: 'Genero_idGenero' })
  generos!: Genero[];

  constructor(
    tituloOriginal: string,
    preco: number,
    duracao: string,
    ano: number,
    faixaEtaria: string,
    generos?: Genero[],
    tituloPT?: string,
    id?: number
  ) {
    this.tituloOriginal = tituloOriginal;
    this.preco = preco;
    this.duracao = duracao;
    this.ano = ano;
    this.faixaEtaria = faixaEtaria;
    if (generos) this.generos = generos;
    if (tituloPT) this.tituloPT = tituloPT;
    if (id) this.idFilme = id;
  }
}