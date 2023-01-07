import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
    },
    shortDescription: {
      type: String,
      minlength: [20, 'Short description must be more than 20 characters'],
      maxlength: [150, 'Short description must be less than 150 characters'],
      default: 'No short description has been provided.',
    },
    postText: {
      type: String,
      required: [true, 'Please provide text'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'You need to be an admin to add a Post'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('BlogPost', BlogPostSchema);
