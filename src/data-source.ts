import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category, Question } from "./relations/cascades";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "changeme",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [Category, Question],
  migrations: [],
  subscribers: [],
});
