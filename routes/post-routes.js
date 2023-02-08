import express from "express";
import {
  getAllPost,
  createPost,
  deletePost,
  getpostbyusername,
  getcount,
} from "../controllers/post-controller.js";

const router = express.Router();

router.get("/", getAllPost);
router.post("/newpost", createPost);
router.post("/userpost", getpostbyusername);
router.delete("/delete/:id", deletePost);
router.get("/count", getcount);

export default router;
