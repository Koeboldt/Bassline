const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Get all comments
router.get('/comments', commentController.getAllComments);

// Get comments by post ID
router.get('/posts/:postId/comments', commentController.getCommentsByPostId);

// Create a new comment
router.post('/posts/:postId/comments', commentController.createComment);

// Update a comment
router.put('/comments/:commentId', commentController.updateComment);

// Delete a comment
router.delete('/comments/:commentId', commentController.deleteComment);

module.exports = router;
