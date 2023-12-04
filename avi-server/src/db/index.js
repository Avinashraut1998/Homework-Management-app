const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DBNAME}`, {
      dbName: process.env.DBNAME,
    });
    console.log("Connected Successfully");
  } catch (error) {
    console.log("Mongo Connection Failed ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
