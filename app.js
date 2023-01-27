import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
// import blogRouter from "./routes/blog-routes";
// import router from "./routes/user-routes";
import cors from "cors";
const app = express();

dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use(express.json());
// app.use("/api/user", router);
// app.use("/api/blog", blogRouter);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => app.listen(3000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 3000")
  )
  .catch((err) => console.log(err));
