import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('Endereco')
export class Endereco {
  @PrimaryGeneratedColumn({ name: 'idEndereco' })
  idEndereco!: number;

  @Column({ length: 2 })
  UF: string;

  @Column({ length: 45 })
  cidade: string;

  @Column({ length: 45 })
  bairro: string;

  @Column()
  numero: number;

  @Column({ length: 45 })
  rua: string;

  @Column({ length: 45, nullable: true })
  comp?: string;

  @Column({ length: 9 })
  cep: string;

  constructor(UF: string, cidade: string, bairro: string, numero: number, rua: string, cep: string, comp?: string, id?: number) {
    this.UF = UF;
    this.cidade = cidade;
    this.bairro = bairro;
    this.numero = numero;
    this.rua = rua;
    this.cep = cep;
    if (comp) this.comp = comp;
    if (id) this.idEndereco = id;
  }
}