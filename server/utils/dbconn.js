const mongoose = require("mongoose");

const URL =
  "mongodb+srv://pankaj1234kashyap:KerV0MT0QNZ70XNh@cluster0.kibzpt8.mongodb.net/AdminDashboard?retryWrites=true&w=majority";
const connectDb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("database connected successfully");
  } catch (e) {
    console.log("database connection error");
    process.exit(0);
  }
};
module.exports = connectDb;
