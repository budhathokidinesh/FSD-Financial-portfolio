import express from "express";
import { getUserByEmail, insertUser } from "../models/user/UserModel.js";
import { comparePassword, hashPassword } from "../utils/bcryptjs.js";
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
router.post("/login", async (req, res, next) => {
  try {
    // 1. Recieve email and password
    const { email, password } = req.body;
    if (email && password) {
      //2. Find the user by email
      const user = await getUserByEmail(email);
      if (user?._id) {
        //3. Match the password
        const isMatched = comparePassword(password, user.password);
        if (isMatched) {
          // The user actually authenticated
          //4. JWT and store the jwt in db then return the user {} with jwt token
          user.password = undefined;

          res.json({
            status: "success",
            message: "LogedIn successfully",
            user,
          });
          return;
        }
      }
    }
    res.status(401).json({
      error: "Invalid email or password",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
// user profile

export default router;
