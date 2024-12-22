const express = require("express");
const membershipRoute = express.Router();
const membershipModel = require("../Models/membershipModel");
const userModel = require("../Models/userModel");

membershipRoute.get("/membership/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await userModel.findById(id);
    const email = result.email;
    const result2 = await membershipModel.findOne({ email });
    if (result2 == null) {
      return res.json({ msg: "Not Found" });
    } else {
      return res.json({ msg: "Found", res: result2 });
    }
  } catch (error) {
    return res.json({ msg: error });
  }
});

membershipRoute.get("/membership", async (req, res) => {
  try {
    const result = await membershipModel.find();
    return res.json({ msg: "Found", res: result });
  } catch (error) {
    return res.json({ msg: error });
  }
});

membershipRoute.post("/membership", async (req, res) => {
  try {
    const { email, age, weight, duration, tid } = req.body;
    var sd = Date.now();
    var date = new Date();
    var ed = new Date(date).setMonth(date.getMonth() + 3);
    if (duration == "3") {
      var s = "Bronze";
    } else if (duration == "6") {
      var s = "Silver";
    } else {
      var s = "Gold";
    }

    const result = await membershipModel.create({
      email: email,
      age: age,
      weight: weight,
      duration: duration,
      tid: tid,
      status: s,
      pstatus: "n",
      starting: sd,
      ending: ed,
    }); //p-pending,n-notapproved
    return res.json({ msg: "MemberShip Registration Success" });
  } catch (error) {
    return res.json({ msg: error });
  }
});

membershipRoute.patch("/membership/:id/:ps", async (req, res) => {
  try {
    const id = req.params.id;
    const ps = req.params.ps;
    const result = await membershipModel.findByIdAndUpdate(id, { pstatus: ps }); //p-pending,n-notapproved
    return res.json({ msg: "MemberShip Payment Status Changed" });
  } catch (error) {
    return res.json({ msg: error });
  }
});

module.exports = membershipRoute;
