import "reflect-metadata";
import { DataSource } from "typeorm";
import { EmbeddedEntity } from "./entity/EmbeddedEntities";
import { EntityInheritance } from "./entity/EntitiesInheritance";
import { User } from "./entity/User";
import { Category, Post, PostCatory } from "./entity/ViewEntites";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "changeme",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [Post, Category, PostCatory],
  migrations: [],
  subscribers: [],
});
