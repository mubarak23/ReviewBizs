import express from "express";
const router = express.Router();
import {
  getAllBusiness,
  getBusinessById,
  createBusinessReview,
  getUserBusiness,
  createBusiness,
  Businesslists,
  updateBusiness,
  deleteBusiness,
} from "../controllers/businessController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getAllBusiness)
  .post(protect, createBusiness)
  .get(protect, admin, Businesslists);
//.post(protect, admin, createProduct);
router.route("/mybusiness").get(protect, getUserBusiness);
router
  .route("/:id")
  .get(getBusinessById)
  .put(protect, updateBusiness)
  .delete(protect, deleteBusiness);
router.route("/:id/reviews").post(createBusinessReview);

export default router;
