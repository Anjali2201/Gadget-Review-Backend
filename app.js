import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/user-routes.js";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", router);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => app.listen(3000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 3000")
  )
  .catch((err) => console.log(err));
