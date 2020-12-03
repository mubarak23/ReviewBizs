import express from "express";
const router = express.Router();
import {
  getAllBusiness,
  getBusinessById,
} from "../controllers/businessController.js";

router.route("/").get(getAllBusiness);
//.post(protect, admin, createProduct);
router.route("/:id").get(getBusinessById);

export default router;
