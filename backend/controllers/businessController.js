import asyncHandler from "express-async-handler";
import Business from "../models/businessModel.js";

// @desc    Fetch all business
// @route   GET /api/business
// @access  Public
const getAllBusiness = asyncHandler(async (req, res) => {
  const businesses = await Business.find({});
  //return businesses;
  res.json(businesses);
});

// @desc    Get business Details
// @route   GET /api/business/:id
// @access  Public

const getBusinessById = asyncHandler(async (req, res) => {
  const business = await Business.findById(req.params.id);
  if (business) {
    res.json(business);
  } else {
    res.status(400);
    throw new Error("Business not found");
  }
});

export { getAllBusiness, getBusinessById };
