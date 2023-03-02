import express from "express";
import {
  getAllPost,
  createPost,
  deletePost,
  getpostbyusername,
  getcount,
  likepost,
  dislikepost,
  comments,
} from "../controllers/post-controller.js";

const router = express.Router();

router.get("/", getAllPost);
router.post("/newpost", createPost);
router.post("/userpost", getpostbyusername);
router.delete("/delete/:id", deletePost);
router.get("/count", getcount);
router.post("/like/:id", likepost);
router.post("/dislike/:id", dislikepost);
router.post("/comments/:id", comments);


export default router;
