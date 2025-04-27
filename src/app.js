// express app and other middlewares like cors

import express from "express";
import cors from "cors";

export const expressApp = express();

expressApp.use(
  cors({
    origin: "http://localhost:3000",
  })
);

expressApp.use(express.json());

export default expressApp;
