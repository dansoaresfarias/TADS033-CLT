import { Entity, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Endereco } from "./endereco";
import { Locacao } from "./locacao";

@Entity('Funcionario')
export class Funcionario {
  @Column({ primary: true, length: 14 })
  CPF: string;

  @Column({ length: 45 })
  nome: string;

  @Column({ length: 1 })
  sexo: string;

  @Column({ length: 20 })
  CTPS: string;

  @Column({ length: 45, nullable: true })
  email?: string;

  @Column()
  dataNasc: Date;

  @Column()
  dataAdm: Date;

  @Column({ nullable: true })
  dataDem?: Date;

  @Column()
  status: boolean;

  @Column({ length: 45 })
  cargo: string;

  @OneToOne(() => Endereco)
  @JoinColumn({ name: 'Endereco_idEndereco' })
  endereco: Endereco;

  @OneToMany(() => Locacao, (locacao) => locacao.funcionario)
  locacoes!: Locacao[];

  constructor(
    CPF: string,
    nome: string,
    sexo: string,
    CTPS: string,
    dataNasc: Date,
    dataAdm: Date,
    status: boolean,
    cargo: string,
    endereco: Endereco,
    email?: string,
    dataDem?: Date
  ) {
    this.CPF = CPF;
    this.nome = nome;
    this.sexo = sexo;
    this.CTPS = CTPS;
    this.dataNasc = dataNasc;
    this.dataAdm = dataAdm;
    this.status = status;
    this.cargo = cargo;
    this.endereco = endereco;
    if (email) this.email = email;
    if (dataDem) this.dataDem = dataDem;
  }
}
