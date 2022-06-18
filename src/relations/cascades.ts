/**
 * cascade: boolean | ("insert" | "update")[] - If set to true, the related object will be inserted and updated in the database. You can also specify an array of cascade options.
onDelete: "RESTRICT"|"CASCADE"|"SET NULL" - specifies how foreign key should behave when referenced object is deleted
nullable: boolean - Indicates whether this relation's column is nullable or not. By default it is nullable.
orphanedRowAction: "nullify" | "delete" | "soft-delete" - When a child row is removed from its parent, determines if the child row should be orphaned (default) or deleted (delete or soft delete).
 */

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AppDataSource } from "../data-source";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Question, (question) => question.categories)
  questions: Question[];
}

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @ManyToMany((type) => Category, (category) => category.questions, {
    cascade: ["insert", "update"], // CASCADES
  })
  @JoinTable()
  categories: Category[];
}

export async function test() {
  const category1 = new Category();
  category1.name = "ORMs";

  const category2 = new Category();
  category2.name = "Programming";

  const question = new Question();
  question.title = "How to ask questions?";
  question.text = "Where can I ask TypeORM-related questions?";
  question.categories = [category1, category2];
  await AppDataSource.manager.save(question);
}

// As you can see in this example we did not call save for category1 and category2. They will be automatically inserted, because we set cascade to true.

// Keep in mind - great power comes with great responsibility. Cascades may seem like a good and easy way to work with relations,
// but they may also bring bugs and security issues when some undesired object is being saved into the database.
// Also, they provide a less explicit way of saving new objects into the database.
