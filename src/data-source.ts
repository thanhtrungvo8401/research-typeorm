import "reflect-metadata";
import { DataSource } from "typeorm";
import { EmbeddedEntity } from "./entity/EmbeddedEntities";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "changeme",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [User, EmbeddedEntity],
  migrations: [],
  subscribers: [],
});
