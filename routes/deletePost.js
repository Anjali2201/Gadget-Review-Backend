var express = require("express");
var router = express.Router();
const Post = require("../models/Post");

router.delete("/:id", async function (req, res, next) {
  const { id } = req.params;

  let post;
  try {
    post = await Post.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!post) {
    return res.status(404).json({ message: "Couldnt Find Post By This ID" });
  }
  try {
    await post.remove();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ message: "Post Deleted" });
});

module.exports = router;
