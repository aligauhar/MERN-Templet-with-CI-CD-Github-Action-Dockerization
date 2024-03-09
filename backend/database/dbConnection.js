import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URL, {
    dbName:process.env.MONGO_DataBase_Name,
  })
  .then(() => {
      console.log("Connected to database!")
    })
  .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`)
    });
};
