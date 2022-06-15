# TYPEORM:

## Datasouce:

## Entity:

### `Embedded entities`

> Reduce duplication of code writting.

<details>

  <summary>more</summary>
  <blockquote>

```js
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

  // SQL
  CREATE TABLE IF NOT EXISTS public.embedded_entity (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  props1 character varying COLLATE pg_catalog."default" NOT NULL,
  "timeLogCreateddate" timestamp without time zone NOT NULL,
  "timeLogUpdateddate" timestamp without time zone NOT NULL,
  CONSTRAINT "PK_2286d1ffdaf9f9abb70e11a68af" PRIMARY KEY (id)
  )
```

  </blockquote>
</details>

---

### `Entity Inheritance`

> Reduce duplication of code writting

<details>
  <summary>more</summary>

```js
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

CREATE TABLE IF NOT EXISTS public.entity_inheritance
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone NOT NULL,
    author character varying COLLATE pg_catalog."default" NOT NULL,
    title character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_4e270010d6ef40bf8f9e8ac7beb" PRIMARY KEY (id)
)

```

</details>

---

### `Tree entities`

<details>
<summary>more</summary>
<blockquote>

Adjacency li
Nested

Materialized Path (aka Path Enumeration)f

Closure table

Working with tree entities

</blockquote>
</details>

---

### `View Entity`

> A class map to database view

<details>
  <summary>more</summary>
  <blockqute>

```js
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
```

  </blockquote>
</details>

---
