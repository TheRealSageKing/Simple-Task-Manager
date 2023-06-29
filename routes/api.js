import express from "express";

const apiRoutes = express.Router();

apiRoutes.get("/healthcheck", function (req, res) {
  res.status(200).json({ success: true, message: "System active" });
});

export default apiRoutes;
