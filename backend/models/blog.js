const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    blogImage: {
        required: true,
        type: String
    }
},
    {
        timestamps: true
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;