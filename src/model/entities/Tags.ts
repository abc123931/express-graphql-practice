import { Entity, BaseEntity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Tags extends BaseEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;
}
