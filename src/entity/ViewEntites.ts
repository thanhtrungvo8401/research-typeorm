import { join } from "path";
import {
  Column,
  DataSource,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  ViewColumn,
  ViewEntity,
} from "typeorm";
import { AppDataSource } from "../data-source";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  categoryId: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "categoryId" })
  category: Category;
}

@ViewEntity({
  expression: (dataSource: DataSource) => {
    return dataSource
      .createQueryBuilder()
      .select("post.id", "id")
      .addSelect("post.name", "name")
      .addSelect("category.name", "categoryName")
      .from(Post, "post")
      .leftJoin(Category, "category", "category.id = post.categoryId");
  },
})
export class PostCatory {
  @ViewColumn()
  id: number;

  @ViewColumn()
  name: string;

  @ViewColumn()
  categoryName: string;
}

export async function handleViewEntity() {
  const c1 = new Category();
  const c2 = new Category();
  c1.name = "category1";
  c2.name = "category2";

  await AppDataSource.manager.save(c1);
  await AppDataSource.manager.save(c2);

  const p1 = new Post();
  const p2 = new Post();
  p1.name = "Post 1";
  p2.name = "POst 2";

  p1.categoryId = c1.id;
  p2.categoryId = c2.id;

  await AppDataSource.manager.save(p1);
  await AppDataSource.manager.save(p2);

  const postCategory = await AppDataSource.manager.find(PostCatory);
  console.log(postCategory);
}
