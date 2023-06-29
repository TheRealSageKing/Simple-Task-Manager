import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "mysql://root:qbLR9iba6WvIbgS2XOIc@containers-us-west-42.railway.app:5769/railway",
  {
    dialect: "mysql",
    logging: false,
  }
);

export default sequelize;
