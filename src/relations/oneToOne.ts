import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AppDataSource } from "../data-source";

// Entity have @JoinColumn will have "foreign key" in the database:

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: string;

  @Column()
  photo: string;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Profile, { cascade: true })
  @JoinColumn()
  profile: Profile;
}

export async function test() {
  const profile = new Profile();
  profile.gender = "male";
  profile.photo = "me.jpg";
  // await AppDataSource.manager.save(profile);

  const user = new User();
  user.name = "Joe Smith";
  user.profile = profile;
  await AppDataSource.manager.save(user);
}

/**
 * With "cascades" enabled you can save this relation with only one save call.
 *   @OneToOne(() => Profile, { cascade: true })
 * we don't need to save profile into db first
 */

// =====================================================================================================================================================================

/**
 * To load user with profile inside you must specify relation in FindOptions:

const users = await dataSource.getRepository(User).find({
    relations: {
        profile: true,
    },
})
Or using QueryBuilder you can join them:

const users = await dataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.profile", "profile")
    .getMany()
 */

// =====================================================================================================================================================================

/**
 * With eager loading enabled on a relation, you don't have to specify relations in the find command as it will ALWAYS be loaded automatically. If you use QueryBuilder eager relations are disabled, you have to use leftJoinAndSelect to load the relation.

Relations can be uni-directional and bi-directional. Uni-directional are relations with a relation decorator only on one side. Bi-directional are relations with decorators on both sides of a relation.
 */

// =====================================================================================================================================================================

/**
 * Relations can be uni-directional and bi-directional. Uni-directional are relations with a relation decorator only on one side. Bi-directional are relations with decorators on both sides of a relation.
 */

/**
 *     @OneToOne(() => User, (user) => user.profile) // specify inverse side as a second parameter
    user: User
 */

/**
 * 
@OneToOne(() => Profile, (profile) => profile.user) // specify inverse side as a second parameter
@JoinColumn()
profile: Profile
*/
