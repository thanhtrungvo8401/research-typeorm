import { AppDataSource } from "./data-source";
import { handleViewEntity } from "./entity/ViewEntites";
import { test } from "./relations/cascades";
// import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    test();
  })
  .catch((error) => console.log(error));
