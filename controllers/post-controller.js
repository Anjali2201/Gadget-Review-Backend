import Post from "../models/Post";

export const getAllPost = async (req, res, next) => {
  let posts;
  try {
    posts = await Post.find();
  } catch (err) {
    console.log(err);
  }
  if (!posts) {
    return res.status(404).json({ message: "No Posts Found" });
  }
  return res.status(200).json({ posts });
};

export const createPost = async (req, res, next) => {
  const {
    authoremail,
    gadgetname,
    category,
    model,
    link,
    price,
    description,
    rate,
  } = req.body;
  const post = new Post({
    authoremail,
    gadgetname,
    category,
    model,
    link,
    price,
    description,
    rate,
  });
  try {
    await post.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ post });
};

export const deletePost = async (req, res, next) => {
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
};

export const getpostbyusername = async (req, res, next) => {
  const { email } = req.body;
  let posts;
  try {
    posts = await Post.find({ authoremail: email });
  } catch (err) {
    console.log(err);
  }
  if (!posts) {
    return res.status(404).json({ message: "No Posts Found" });
  }
  return res.status(200).json({ posts });
};
