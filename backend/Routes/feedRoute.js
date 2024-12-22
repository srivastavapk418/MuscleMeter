const express = require("express");
const feedRoute = express.Router();
const userModel = require("../Models/userModel");
const feedModel = require("../Models/feedModel");

feedRoute.post("/feed", async (req, res) => {
  try {
    const { email, feedtype, message } = req.body; //make same objects as in feedModel
    const userBody = await userModel.findOne({ email });
    const uid = userBody._id;
    body = { uid, message, feedtype };
    const stored = await feedModel.create(body);
    return res.json({ msg: "Feedback Submitted" });
  } catch (error) {
    return res.json({ msg: error });
  }
});

feedRoute.get("/feed/:id/:feedtype", async (req, res) => {
  try {
    p = req.params;
    uid = p.id;
    feedtype = p.feedtype;
    const result = await feedModel.find({ uid: uid, feedtype: feedtype });
    // console.log(result)
    if (result && result.length > 0) {
      return res.json({ msg: "Found", result: result });
    } else {
      return res.json({ msg: "Data Not Available" });
    }
  } catch (error) {
    return res.json({ msg: error });
  }
});

feedRoute.get("/feed", async (req, res) => {
  try {
    const result = await feedModel.find();
    if (result && result.length > 0) {
      return res.json({ msg: "Found", res: result });
    } 
    else {
      return res.json({ msg: "Data Not Available" });
    }
  } catch (error) {
    return res.json({ msg: error });
  }
});

feedRoute.get("/feed/:feedtype", async (req, res) => {
  try {
    feed = req.params.feedtype;
    const result = await feedModel.find({ feedtype: feed });
    if (result && result.length>0) {
      return res.json({ msg: "Found", result: result });
    } else {
      return res.json({ msg: "Data Not Available" });
    }
  } catch (error) {
    return res.json({ msg: error });
  }
});

module.exports = feedRoute;
