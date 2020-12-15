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

// @desc    Post business review
// @route   POST /api/business/:id/review
// @access  Public

const createBusinessReview = asyncHandler(async (req, res) => {
  const { name, email, rating, comment } = req.body;
  const business = await Business.findById(req.params.id);
  if (business) {
    const review = {
      name,
      email,
      comment,
      rating,
    };
    console.log(review);
    business.reviews.push(review);
    business.rating =
      business.reviews.reduce((acc, item) => item.rating + acc, 0) /
      business.reviews.length;
    business.numReviews = business.reviews.length;
    await business.save();
    res.status(201).json({ message: "Review Added" });
  } else {
    res.status(404);
    throw new Error("Business not found");
  }
});

// @desc    Get All User business
// @route   POST /api/business
// @access  Private
const getUserBusiness = asyncHandler(async (req, res) => {
  const all_user_business = await Business.find({ user: req.user._id });
  res.json(all_user_business);
});

// @desc    Create business
// @route   POST /api/business
// @access  Private

const createBusiness = asyncHandler(async (req, res) => {
  const business = new Business({
    name: "Sample Business",
    image: "/images/alexa.jpg",
    description: "This is the first description description description",
    category: "Category Sample",
  });
  const create_business = await business.save();
  res.json(create_business);
});

export {
  getAllBusiness,
  getBusinessById,
  createBusinessReview,
  getUserBusiness,
};
