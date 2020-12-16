import express from "express";
const router = express.Router();
import {
  getAllBusiness,
  getBusinessById,
  createBusinessReview,
  getUserBusiness,
  createBusiness,
} from "../controllers/businessController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(getAllBusiness).post(protect, createBusiness);
//.post(protect, admin, createProduct);
router.route("/mybusiness").get(protect, getUserBusiness);
router.route("/:id").get(getBusinessById);
router.route("/:id/reviews").post(createBusinessReview);

export default router;
