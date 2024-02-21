// Import necessary modules
const Comment = require('../models/Comment');

// Controller functions
const commentController = {
  // Controller function to get all comments
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Controller function to get comments by post ID
  getCommentsByPostId: async (req, res) => {
    try {
      const { postId } = req.params;
      const comments = await Comment.find({ postId });
      res.json(comments);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Controller function to create a new comment
  createComment: async (req, res) => {
    try {
      const { postId } = req.params;
      const { content } = req.body;

      const newComment = new Comment({ postId, content });
      await newComment.save();

      res.status(201).json(newComment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Controller function to update a comment
  updateComment: async (req, res) => {
    try {
      const { commentId } = req.params;
      const { content } = req.body;

      const updatedComment = await Comment.findByIdAndUpdate(commentId, { content }, { new: true });

      if (!updatedComment) {
        return res.status(404).json({ message: 'Comment not found' });
      }

      res.json(updatedComment);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Controller function to delete a comment
  deleteComment: async (req, res) => {
    try {
      const { commentId } = req.params;

      const deletedComment = await Comment.findByIdAndDelete(commentId);

      if (!deletedComment) {
        return res.status(404).json({ message: 'Comment not found' });
      }

      res.json({ message: 'Comment deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = commentController;

