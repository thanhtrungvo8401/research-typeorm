<h1 style="color:#750608">TYPEORM</h1>

## Datasouce:

---

## Entity:

#### `Embedded entities`

> Reduce duplication of code writting.
> <a href='https://github1s.com/thanhtrungvo8401/typeorm-expressjs-typescript/blob/master/src/entity/EmbeddedEntities.ts' >Go to code</a>

#### `Entity Inheritance`

> Reduce duplication of code writting. A class with some column (@Column, @Primary...) other class with extends from this one.
> <a href='https://github1s.com/thanhtrungvo8401/typeorm-expressjs-typescript/blob/master/src/entity/EntitiesInheritance.ts' >Go to code</a>

#### `Tree entities`

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

#### `View Entity`

> A custom entity contain information that we want such as join, select, merge table... (virtual table, not exist in DB)
> <a href='https://github1s.com/thanhtrungvo8401/typeorm-expressjs-typescript/blob/master/src/entity/ViewEntites.ts' target='_blank' >Go to code</a>

---

## Relations:

#### `Relation options`:

<a href='https://github1s.com/thanhtrungvo8401/typeorm-expressjs-typescript/blob/master/src/relations/cascades.ts' >Cascades</a>

#### `One to One`:

<a href='https://github1s.com/thanhtrungvo8401/typeorm-expressjs-typescript/blob/master/src/relations/oneToOne.ts' >One to One</a>

#### `Many-to-one / one-to-many relations`:

<a href='https://typeorm.io/many-to-one-one-to-many-relations' >Many-to-one / one-to-many</a>

## Entity Manerger And Repository:

#### `Entity manerger`

> Using `EntityManager`, we can `insert, update, delete, load` just like a `collection` of all `entity repositories`

> You can access the entity manager via `DataSource`
> <a href='https://typeorm.io/working-with-entity-manager' >Entity manager</a>

#### `Repository`

> `Repository` is just like `EntityManager` but its operations are limited to a concrete entity. You can access the repository via `EntityManager` or `dataSource`;
> <a href='https://typeorm.io/working-with-repository' >Repository</a>
