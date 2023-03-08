import Post from "../models/Post";

// ---------------------- All Posts ----------------------
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

// ----------------------- Create Post -----------------------
export const createPost = async (req, res, next) => {
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

// ----------------------- Delete Post -----------------------
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

// ----------------------- Get Post by username -----------------------
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

// ----------------------- Get Post by category -----------------------

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

// ----------------------- Get Post Count -----------------------
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

// // ----------------------- Likes Count -----------------------
// export const likepost = async (req, res, next) => {
//   const { id } = req.params;
//   let post;
//   try {
//     post = await Post.findById(id);
//   } catch (err) {
//     return console.log(err);
//   }
//   if (!post) {
//     return res.status(404).json({ message: "Couldnt Find Post By This ID" });
//   }
//   try {
//     post.likes = post.likes + 1;
//     await post.save();
//   } catch (err) {
//     return console.log(err);
//   }
//   return res.status(200).json({ message: "Post Liked" });
// };

// // ----------------------- Dislikes Count -----------------------
// export const dislikepost = async (req, res, next) => {
//   const { id } = req.params;
//   let post;
//   try {
//     post = await Post.findById(id);
//   } catch (err) {
//     return console.log(err);
//   }
//   if (!post) {
//     return res.status(404).json({ message: "Couldnt Find Post By This ID" });
//   }
//   try {
//     post.dislikes = post.dislikes + 1;
//     await post.save();
//   } catch (err) {
//     return console.log(err);
//   }
//   return res.status(200).json({ message: "Post Disliked" });
// };

// // ----------------------- Comments -----------------------

// export const comments = async (req, res, next) => {
//   const { id } = req.params;
//   const { comment } = req.body;
//   let post;
//   try {
//     post = await Post.findById(id);
//   } catch (err) {
//     return console.log(err);
//   }
//   if (!post) {
//     return res.status(404).json({ message: "Couldnt Find Post By This ID" });
//   }
//   try {
//     post.comments.push(comment);
//     await post.save();
//   } catch (err) {
//     return console.log(err);
//   }
//   return res.status(200).json({ message: "Comment Added" });
// };
