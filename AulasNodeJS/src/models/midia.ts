import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
  } from 'typeorm';
  import { Status } from './status';
  import { Filme } from './filme';
  
  @Entity('Midia')
  export class Midia {
    @PrimaryGeneratedColumn({ name: 'idMidia' })
    idMidia!: number;
  
    @Column({ length: 45 })
    tipo: string;
  
    @Column({ length: 45 })
    secao: string;
  
    @Column({ length: 45 })
    local: string;
  
    @ManyToOne(() => Status)
    @JoinColumn({ name: 'Status_idStatus' })
    status: Status;
  
    @ManyToOne(() => Filme)
    @JoinColumn({ name: 'Filme_idFilme' })
    filme: Filme;
  
    constructor(tipo: string, secao: string, local: string, status: Status, filme: Filme, id?: number) {
      this.tipo = tipo;
      this.secao = secao;
      this.local = local;
      this.status = status;
      this.filme = filme;
      if (id) this.idMidia = id;
    }
  }
  