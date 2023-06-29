import express from "express";
import {
  getAllTasks,
  getCompletedTasks,
  getPendingTasks,
  postTask,
  toggleTaskStatus,
  updateTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.get("/", getAllTasks);

router.get("/completed", getCompletedTasks);

router.get("/pending", getPendingTasks);

router.post("/create", postTask);

router.get("/task/:id", getAllTasks);

router.post("/task/:id", updateTask);

router.get("/toggle-status/:id", toggleTaskStatus);

router.get("/edit/:id", function (req, res) {
  res.send("Edit Todo Page");
});

router.post("/edit/:id", function (req, res) {
  res.send("Single Todo Page");
});

export default router;
