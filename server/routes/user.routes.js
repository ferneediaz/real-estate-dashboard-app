import express from "express";
import {
  createUser,
  getAllUsers,
  getUserInfoByID,
  deleteAllUsers, // Import the new function
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser).delete(deleteAllUsers); // Add the new endpoint here
router.route("/:id").get(getUserInfoByID);
export default router