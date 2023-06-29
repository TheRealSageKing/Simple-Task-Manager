import sequelize from "../config/database.js";
import Sequelize from "sequelize";

const Task = sequelize.define("Task", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

export class TaskModel {
  constructor(title) {
    this.title = title;
  }

  static async fetchAll() {
    try {
      return await Task.findAll();
    } catch (error) {
      console.log(
        "An error occured trying to read tasks. Error: " + error.message
      );
      return [];
    }
  }

  static async fetchWhere(data) {
    try {
      return await Task.findAll({
        where: data,
      });
    } catch (error) {
      console.log(
        "An error occured trying to read tasks. Error: " + error.message
      );
      return [];
    }
  }

  static async fetchSingle(id) {
    try {
      return await Task.findByPk(id);
    } catch (error) {
      console.log(
        "An error occured trying to read single task. Error: " + error.message
      );
      return null;
    }
  }

  save() {
    Task.create({
      title: this.title,
      completed: false,
    })
      .then()
      .catch((error) =>
        console.log(
          "An error occured trying to create task. Error: " + error.message
        )
      );
  }

  static async update(id, data) {
    try {
      let task = await Task.findByPk(id);
      if (task) {
        await task.update(data);
        await task.save();
        return true;
      }
      return false;
    } catch (error) {
      console.log(
        "An error occured trying to update task. Error: " + error.message
      );
      return false;
    }
  }
}

export default Task;
