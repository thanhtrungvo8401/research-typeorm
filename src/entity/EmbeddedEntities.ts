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
