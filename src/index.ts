import { AppDataSource } from "./data-source";
import { test } from "./relations/oneToOne";

AppDataSource.initialize()
  .then(async () => {
    test();
  })
  .catch((error) => console.log(error));
