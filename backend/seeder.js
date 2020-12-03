import mongoose from "mongoose";
import color from "colors";
import dotenv from "dotenv";
import users from "./data/users.js";
import business from "./data/business.js";
import User from "./models/userModel.js";
import Business from "./models/businessModel.js";
import connecteDB from "./config/db.js";

dotenv.config();
connecteDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Business.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleBusinesss = business.map((buz) => {
      return { ...buz, user: adminUser };
    });
    await Business.insertMany(sampleBusinesss);
    console.log("Data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Business.deleteMany();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] == "_d") {
  destroyData();
} else {
  importData();
}
