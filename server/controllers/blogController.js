// Import necessary modules
const Blog = require('../models/Blog');

// Controller functions
const blogController = {
  // Controller function to get all blogs
  getAllBlogs: async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.json(blogs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Controller function to create a new blog
  createBlog: async (req, res) => {
    const blog = new Blog({
      title: req.body.title,
      content: req.body.content
    });

    try {
      const newBlog = await blog.save();
      res.status(201).json(newBlog);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Controller function to update a blog
  updateBlog: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;

      const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content }, { new: true });

      if (!updatedBlog) {
        return res.status(404).json({ message: 'Post not found' });
      }

      res.json(updatedBlog);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Controller function to delete a blog
  deleteBlog: async (req, res) => {
    try {
      const { id } = req.params;

      const deletedBlog = await Blog.findByIdAndDelete(id);

      if (!deletedBlog) {
        return res.status(404).json({ message: 'Post not found' });
      }

      res.json({ message: 'Post deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = blogController;
