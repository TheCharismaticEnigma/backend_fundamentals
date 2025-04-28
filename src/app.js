// express app and other middlewares like cors

import express, { urlencoded } from "express";
import cors from "cors";
import { PAYLOAD_LIMITS } from "./constants";

export const expressApp = express();

const { DEFAULT: DEFAULT_PAYLOAD_LIMIT } = PAYLOAD_LIMITS;
// Express App is configured to accept data in different forms

expressApp.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

expressApp.use(
  express.json({
    limit: DEFAULT_PAYLOAD_LIMIT,
  })
);

expressApp.use(
  urlencoded({
    limit: DEFAULT_PAYLOAD_LIMIT,
  })
);

export default expressApp;
