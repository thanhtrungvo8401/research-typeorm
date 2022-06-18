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

> A custom entity contain information that we want (virtual table, not exist in DB)
> <a href='https://github.com/thanhtrungvo8401/typeorm-expressjs-typescript/blob/master/src/entity/ViewEntites.ts' target='_blank' >Go to code</a>

## Relations:

### `Relation options`:
