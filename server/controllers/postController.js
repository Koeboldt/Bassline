// Import necessary modules
const Post = require('../models/Post');

// Controller functions
const postController = {
  // Controller function to get all posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Controller function to create a new post
  createPost: async (req, res) => {
    const post = new Post({
      title: req.body.title,
      content: req.body.content
    });

    try {
      const newPost = await post.save();
      res.status(201).json(newPost);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Controller function to update a post
  updatePost: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;

      const updatedPost = await Post.findByIdAndUpdate(id, { title, content }, { new: true });

      if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }

      res.json(updatedPost);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Controller function to delete a post
  deletePost: async (req, res) => {
    try {
      const { id } = req.params;

      const deletedPost = await Post.findByIdAndDelete(id);

      if (!deletedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }

      res.json({ message: 'Post deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = postController;
