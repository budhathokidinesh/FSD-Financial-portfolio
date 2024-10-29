import express from "express";
import { insertUser } from "../models/user/UserModel.js";
import { hashPassword } from "../utils/bcryptjs.js";
const router = express.Router();

// User signup
router.post("/", async (req, res, next) => {
  try {
    // get the user obj
    //encrypt the password
    req.body.password = hashPassword(req.body.password);

    // insert the user
    const user = await insertUser(req.body);
    user?._id
      ? res.json({
          status: "success",
          message: "Your account has been created, you may login now",
        })
      : res.json({
          status: "Error",
          message: "Error happened please try later",
        });
  } catch (error) {
    let msg = error.message;
    if (msg.includes("E11000 duplicate key error collection")) {
      msg = "There is another user have used this email, try another email";
    }
    res.json({
      status: "error",
      message: msg,
    });
  }
});
// User login

// user profile

export default router;
