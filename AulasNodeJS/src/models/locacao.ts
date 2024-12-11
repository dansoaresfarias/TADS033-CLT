import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinColumn } from 'typeorm';
import { Cliente } from './cliente'
import { Funcionario } from './funcionario'
import { Midia } from './midia'

@Entity('Locacao')
export class Locacao {
  @PrimaryGeneratedColumn({ name: 'idLocacao' })
  idLocacao!: number;

  @Column()
  dataLocacao: Date;

  @Column()
  dataPrevista: Date;

  @Column({ nullable: true })
  dataDevolucao?: Date;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  multa?: number;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  valorTotal: number;

  @Column({ length: 45, nullable: true })
  formPag?: string;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'Cliente_CPF' })
  cliente: Cliente;

  @ManyToOne(() => Funcionario)
  @JoinColumn({ name: 'Funcionario_CPF' })
  funcionario: Funcionario;

  @ManyToMany(() => Midia)
  @JoinColumn({ name: 'Midia_idMidia' })
  midias!: Midia[];

  constructor(
    dataLocacao: Date,
    dataPrevista: Date,
    valorTotal: number,
    cliente: Cliente,
    funcionario: Funcionario,
    midias?: Midia[],
    dataDevolucao?: Date,
    multa?: number,
    formPag?: string,
    id?: number
  ) {
    this.dataLocacao = dataLocacao;
    this.dataPrevista = dataPrevista;
    this.valorTotal = valorTotal;
    this.cliente = cliente;
    this.funcionario = funcionario;
    if (midias) this.midias = midias;
    if (dataDevolucao) this.dataDevolucao = dataDevolucao;
    if (multa) this.multa = multa;
    if (formPag) this.formPag = formPag;
    if (id) this.idLocacao = id;
  }
}