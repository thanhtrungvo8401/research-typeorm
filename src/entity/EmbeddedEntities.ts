import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

class TimeLog {
  @Column({ type: Date, nullable: false, name: "createdDate" })
  createdDate: Date;

  @Column({ type: Date, nullable: false, name: "updatedDate" })
  updatedDate: Date;
}

@Entity()
export class EmbeddedEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  props1: string;

  @Column(() => TimeLog)
  timeLog: TimeLog;
}

const sql = `  CREATE TABLE IF NOT EXISTS public.embedded_entity (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  props1 character varying COLLATE pg_catalog."default" NOT NULL,
  "timeLogCreateddate" timestamp without time zone NOT NULL,
  "timeLogUpdateddate" timestamp without time zone NOT NULL,
  CONSTRAINT "PK_2286d1ffdaf9f9abb70e11a68af" PRIMARY KEY (id)
  )`;
