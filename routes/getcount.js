var express = require("express");
var router = express.Router();
const Post = require("../models/Post");

router.get("/", async function (req, res, next) {
  let postcount;
  try {
    postcount = await Post.countDocuments();
  } catch (err) {
    console.log(err);
  }
  if (!postcount) {
    return res.status(404).json({ message: "No Data Found" });
  }
  return res.status(200).json({ postcount });
});

module.exports = router;
