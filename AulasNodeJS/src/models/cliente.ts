import { Entity, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Endereco } from "./endereco";
import { Locacao } from "./locacao";

@Entity('Cliente')
export class Cliente {
  @Column({ primary: true, length: 14 })
  CPF: string;

  @Column({ length: 45 })
  nome: string;

  @Column({ length: 1 })
  sexo: string;

  @Column()
  dataNasc: Date;

  @Column({ length: 45, nullable: true })
  email?: string;

  @OneToOne(() => Endereco)
  @JoinColumn({ name: 'Endereco_idEndereco' })
  endereco: Endereco;

  @OneToMany(() => Locacao, (locacao) => locacao.cliente)
  locacoes!: Locacao[];

  constructor(CPF: string, nome: string, sexo: string, dataNasc: Date, endereco: Endereco, email?: string) {
    this.CPF = CPF;
    this.nome = nome;
    this.sexo = sexo;
    this.dataNasc = dataNasc;
    this.endereco = endereco;
    if (email) this.email = email;
  }
}