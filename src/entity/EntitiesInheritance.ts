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

const sql = `
CREATE TABLE IF NOT EXISTS public.entity_inheritance
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone NOT NULL,
    author character varying COLLATE pg_catalog."default" NOT NULL,
    title character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_4e270010d6ef40bf8f9e8ac7beb" PRIMARY KEY (id)
)
`;
