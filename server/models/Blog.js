const {Schema, model} = require('mongoose');

const commentsSchema = new Schema (
    {
        commentText:{
            type: String,
            required: true,
            maxLength: 280
        },
        commentAuthor:{
            type: String,
            required: true,
            trim: true
        },
        createdAt:{
            type: Date,
            default: Date.now,
        }
    }
)
const blogSchema = new Schema({
    blogText:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    blogAuthor:{
        type: String,
        required: true,
        trim: true
    },
    comments: [commentsSchema]
},{
    toJSON: {
        virtuals: true
    },
}
);

blogSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

const Blog = model('blog', blogSchema);

module.exports = Blog;