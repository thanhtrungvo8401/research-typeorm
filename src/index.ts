import { AppDataSource } from "./data-source";
// import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    console.log("SUCCESSFULLY");
  })
  .catch((error) => console.log(error));
