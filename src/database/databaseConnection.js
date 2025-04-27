import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const dbConnect = async function () {
  const URI = `${process.env.MONGODB_URI}/${DB_NAME}`;

  try {
    const dbConnectionInstance = await mongoose.connect(URI);

    console.log(
      "DATABASE CONNECTION SUCCESSFUL! HOST: ",
      dbConnectionInstance?.connection?.host
    );
  } catch (error) {
    console.log("DATABASE CONNECTION ERROR: ", error);
    process.exit(1);
  }
};

export default dbConnect;
