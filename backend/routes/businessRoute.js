import express from "express";
const router = express.Router();
import {
  getAllBusiness,
  getBusinessById,
  createBusinessReview,
} from "../controllers/businessController.js";

router.route("/").get(getAllBusiness);
//.post(protect, admin, createProduct);
router.route("/:id").get(getBusinessById);
router.route("/:id/reviews").post(createBusinessReview);

export default router;
