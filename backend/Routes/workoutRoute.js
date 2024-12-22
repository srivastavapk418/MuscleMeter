const express = require("express");
const workoutRoute = express.Router();
const workoutModel = require("../Models/workoutModel");


workoutRoute.post("/workout", async (req, res) => {
  try {
    const body = req.body;
    const result = await workoutModel.create(body); //p-pending,n-notapproved
    return res.send({ msg: "Workout Added Success" });
  } catch (error) {
    return res.send({ msg: error });
  }
});

workoutRoute.get("/workout/:id", async (req, res) => {
    try {
        const uid = req.params.id;
        const result = await workoutModel.find({uid});
        if (result == null) {
          return res.send({ msg: "Not Found" });
        } else {
          return res.send({ msg: "Found", res: result });
        }
      } catch (error) {
        return res.send({ msg: error });
      }
});

workoutRoute.get("/workout", async (req, res) => {
    try {
        const result = await workoutModel.find();
        if (result == null) {
          return res.send({ msg: "Not Found" });
        } else {
          return res.send({ msg: "Found", res: result });
        }
      } catch (error) {
        return res.send({ msg: error });
      }
});

module.exports = workoutRoute;
