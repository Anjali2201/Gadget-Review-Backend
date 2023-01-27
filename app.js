import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/user-routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", router);

mongoose
  .connect(
    "mongodb+srv://Anjali:amdra2201@cluster0.nkdvolv.mongodb.net/Reviews?retryWrites=true&w=majority"
  )
  .then(() => app.listen(3000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 3000")
  )
  .catch((err) => console.log(err));
