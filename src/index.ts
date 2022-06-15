import { AppDataSource } from "./data-source";
import { handleViewEntity } from "./entity/ViewEntites";
// import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    handleViewEntity();
  })
  .catch((error) => console.log(error));
