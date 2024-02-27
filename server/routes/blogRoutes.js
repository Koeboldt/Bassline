const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Get all posts
router.get('/blogs', blogController.getAllBlogs);

// Create a new post
router.post('/blogs', blogController.createBlog);

// Update a post
router.put('/blogs/:id', blogController.updateBlog);

// Delete a post
router.delete('/blogs/:id', blogController.deleteBlog);

module.exports = router;
