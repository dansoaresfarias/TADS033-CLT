import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './cliente'
import { Funcionario } from './funcionario'

@Entity('Telefone')
export class Telefone {
  @PrimaryGeneratedColumn({ name: 'idTelefone' })
  idTelefone!: number;

  @Column({ length: 11, nullable: true })
  numero?: string;

  @ManyToOne(() => Cliente, { nullable: true })
  @JoinColumn({ name: 'Cliente_CPF' })
  cliente?: Cliente;

  @ManyToOne(() => Funcionario, { nullable: true })
  @JoinColumn({ name: 'Funcionario_CPF' })
  funcionario?: Funcionario;

  constructor(numero?: string, cliente?: Cliente, funcionario?: Funcionario, id?: number) {
    if (numero) this.numero = numero;
    if (cliente) this.cliente = cliente;
    if (funcionario) this.funcionario = funcionario;
    if (id) this.idTelefone = id;
  }
}