import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Midia } from "./midia";

@Entity('Status')
export class Status {
  @PrimaryGeneratedColumn({ name: 'idStatus' })
  idStatus!: number;

  @Column({ length: 45 })
  nome: string;

  @OneToMany(() => Midia, (midia) => midia.status)
  midias!: Midia[];

  constructor(nome: string, id?: number) {
    if(id){
        this.idStatus = id;
    }
    this.nome = nome;
  }
}