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
  // authoremail: {
  //   type: String,
  //   required: true,
  // },
  // authorname: {
  //   type: String,
  //   required: true,
  // },
  // gadgetname: {
  //   type: String,
  //   required: true,
  // },
  // category: {
  //   type: String,
  //   required: true,
  // },
  // model: {
  //   type: String,
  //   required: true,
  // },
  // price: {
  //   type: String,
  //   required: true,
  // },
  // review: {
  //   type: String,
  //   required: true,
  // },
  // rate: {
  //   type: String,
  //   required: true,
  // },
  const {
    authoremail,
    authorname,
    gadgetname,
    category,
    model,
    price,
    review,
    rate,
  } = req.body;
  const post = new Post({
    authoremail,
    authorname,
    gadgetname,
    category,
    model,
    price,
    review,
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

export const getpostbycategory = async (req, res, next) => {
  const { category } = req.body;
  let posts;
  try {
    posts = await Post.find({ category: category });
  } catch (err) {
    console.log(err);
  }
  if (!posts) {
    return res.status(404).json({ message: "No Posts Found" });
  }
  return res.status(200).json({ posts });
};

export const getcount = async (req, res, next) => {
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
};


