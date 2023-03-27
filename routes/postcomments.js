var express = require("express");
var router = express.Router();
const Post = require("../models/Post");

router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const { email, comment } = req.body;
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
    post.comments.push({ email, comment });
    await post.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ message: "Commented" });
});

module.exports = router;
