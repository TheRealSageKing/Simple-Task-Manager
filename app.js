import express from "express";
import webRoutes from "./routes/web.js";
import apiRoutes from "./routes/api.js";
import sequelize from "./config/database.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

const app = express();
app.set("view engine", "pug");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.use(webRoutes);
app.use("/api", apiRoutes);
dayjs.extend(relativeTime);
app.locals.dayjs = dayjs;

app.use(function (req, res) {
  res.status(404).render("404");
});

try {
  await sequelize.sync();
  app.listen(3000, "0.0.0.0", function () {
    console.clear();
    console.log("App is running on http://localhost:5500/");
    console.log("App connected to database successfully");
  });
} catch (error) {
  console.log("App failed to start. error: " + error.message);
}
