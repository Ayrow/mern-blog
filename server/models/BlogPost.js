import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
    },
    text: {
      type: String,
      required: [true, 'Please provide text'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'You need an account to add a Trip'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('BlogPost', BlogPostSchema);
