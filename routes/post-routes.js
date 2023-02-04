import express from "express";
import {
  getAllPost,
  createPost,
  deletePost,
  getpostbyusername,
} from "../controllers/post-controller.js";

const router = express.Router();

router.get("/", getAllPost);
router.post("/newpost", createPost);
router.post("/userpost", getpostbyusername);
router.delete("/delete/:id", deletePost);

export default router;
