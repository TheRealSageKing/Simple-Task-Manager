import { TaskModel } from "../models/task.model.js";

export const getAllTasks = async function (req, res) {
  let task = null;
  if (req.params.id) {
    task = await TaskModel.fetchSingle(req.params.id);
  }
  let tasks = await TaskModel.fetchAll();
  res.render("index", {
    pageName: "Home Page",
    path: "/",
    tasks: tasks,
    task: task,
  });
};

export const getCompletedTasks = async function (req, res) {
  let completed = await TaskModel.fetchWhere({ completed: true });

  res.render("completed", {
    pageName: "Completed Task Page",
    path: "/completed",
    tasks: completed,
  });
};

export const getPendingTasks = async function (req, res) {
  let pending = await TaskModel.fetchWhere({ completed: false });
  res.render("pending", {
    pageName: "Pending Task Page",
    path: "/pending",
    tasks: pending,
  });
};

export const postTask = function (req, res, next) {
  const taskModel = new TaskModel(req.body.task);
  taskModel.save();
  return res.redirect("/");
};

export const updateTask = async function (req, res, next) {
  await TaskModel.update(req.params.id, { title: req.body.task });
  return res.redirect("/");
};

export const toggleTaskStatus = async function (req, res, next) {
  let task = await TaskModel.fetchSingle(req.params.id);
  if (task == null) {
    console.log("Unable to find task");
    return res.redirect("/");
  }
  await TaskModel.update(req.params.id, { completed: !task.completed });
  return res.redirect("/");
};
