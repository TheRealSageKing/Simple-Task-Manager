import { Sequelize } from "sequelize";

const sequelize = new Sequelize("beginner-node-01", "root", "root", {
  dialect: "mysql",
  logging: false,
});

export default sequelize;
