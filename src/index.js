import "dotenv/config"; //
import http from "http";
import dbConnect from "./database/databaseConnection.js";
import expressApp from "./app.js";

const PORT = process.env.PORT || 8000;
const server = http.createServer(expressApp);

async function startServer() {
  try {
    await dbConnect();

    server.on("error", (error) => {
      console.log("ERROR IN STARTING SERVER", error);
      throw error;
    });

    server.listen(PORT, () => {
      console.log(`SERVER STARTED SUCCESSFULLY ON PORT NUMBER ${PORT}`);
    });
  } catch (error) {
    console.log(`FAILED TO START THE SERVER: ${error}`);
    process.exit(1); // Exit if DB connection fails
  }
}

startServer();
