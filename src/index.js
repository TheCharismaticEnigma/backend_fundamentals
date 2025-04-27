import "dotenv/config"; //
import http from "http";
import dbConnect from "./database/databaseConnection.js";
import expressApp from "./app.js";

const PORT = process.env.PORT || 8000;
const server = http.createServer(expressApp);

async function startServer() {
  await dbConnect();

  server.listen(PORT, () => {
    console.log(`SERVER STARTED SUCCESSFULLY ON PORT NUMBER ${PORT}`);
  });
}

startServer();
