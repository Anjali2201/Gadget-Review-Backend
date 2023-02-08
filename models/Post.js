import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
  authoremail: {
    type: String,
    required: true,
  },
  authorname: {
    type: String,
    required: true,
  },
  gadgetname: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Post", postSchema);
