import express from "express";
import {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  userlists,
} from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/", registerUser);
router.post("/login", authUser);
//get(protect, admin, userlists);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/").get(protect, admin, userlists);
export default router;
