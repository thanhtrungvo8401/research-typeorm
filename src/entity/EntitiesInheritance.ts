import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

abstract class Content {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: Date, nullable: true })
  createdAt: Date;

  @Column()
  updatedAt: Date;
}

@Entity()
export class EntityInheritance extends Content {
  @Column()
  author: string;

  @Column()
  title: string;
}
