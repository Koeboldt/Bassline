const {Schema, model} = require('mongoose');


// todo add favorites, description
const blogSchema = new Schema();

const Blog = model('blog', blogSchema);

module.exports = Blog;