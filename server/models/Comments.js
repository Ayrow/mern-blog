import mongoose from 'mongoose';

const CommentsSchema = new mongoose.Schema(
  {
    body: String,
    post: {
      type: mongoose.Types.ObjectId,
      ref: 'BlogPost',
    },
    postTitle: String,
    createdByUsername: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'You need to be an admin to add a Post'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Comments', CommentsSchema);
