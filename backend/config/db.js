import mongoose from "mongoose";

const connecteDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://mubarak23:3b3b3b3b@cluster0.5jhl3.mongodb.net/ReviewBizs?retryWrites=true&w=majority ",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log(`MongoDB Connected:${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
  }
};

export default connecteDB;
