import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @PrimaryColumn()
  age: number;
}
