const express = require("express");
const userRoute = express.Router();
const userModel = require("../Models/userModel");
const { main } = require("../helper");

userRoute.get("/user", async (req, res) => {
  try {
    const user = await userModel.find();
    return res.json(user);
  } catch (error) {
    return res.json(error);
  }
});

userRoute.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findById(id);
    return res.json(user);
  } catch (error) {
    return res.json(error);
  }
});

userRoute.post("/user", async (req, res) => {
  try {
    const body = req.body;
    const result = await userModel.create(body);
    const sub = "ThankYou | Mail ";
    const msg =
      "<p style='background-color:aqua;color:red;padding:20px;margin-top:20px;'>Thanks for Registration on MuscleMeter 🙋‍♂️🙋‍♀️</p>";
    main(req.body.email, sub, msg);
    return res.json({ msg: "Registration Success" });
  } catch (error) {
    return res.json({ msg: error });
  }
});

userRoute.post("/userlog", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userModel.findOne({ email }); //findOne() only takes object
    if (result) {
      if (result.password == password) {
        return res.json({ msg: "Login Successful", id: result._id });
      } else {
        return res.json({ msg: "Incorrect Password" });
      }
    } else {
      return res.json({ msg: "User Not Found" });
    }
  } catch (error) {
    return res.json({ msg: error });
  }
});

userRoute.delete("/user", async (req, res) => {
  try {
    const { id } = req.body;
    const result = await userModel.findByIdAndDelete(id);
    return res.json({ msg: "Deleted Successfully" });
  } catch (error) {
    return res.json({ msg: error });
  }
});

userRoute.patch("/user/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
      const result = await userModel.findByIdAndUpdate(id, body);
      return res.json({ msg: "Profile Updated Successfully" });
    } catch (error) {
      return res.json({ msg: error });
    }
  });

module.exports = userRoute;
