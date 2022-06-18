import "reflect-metadata";
import { DataSource } from "typeorm";
import { Profile, User } from "./relations/oneToOne";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "changeme",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [Profile, User],
  migrations: [],
  subscribers: [],
  dropSchema: true,
});
