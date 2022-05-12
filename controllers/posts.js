const Post = require('../models/Post')

module.exports = {
    create,
    getAllPosts,
    editPost,
    deletePost
}

// Create
async function create(req, res) {
    try {
        const createdPost = await Post.create(req.body)
        res.status(200).json(createdPost)
    } catch(e) {
        res.status(400).json(e)
    }
}

// Read
async function getAllPosts(req, res) {
    try {
        const posts = await Post.find({})
        res.status(200).json(posts)
    } catch(e) {
        res.status(400).json(e)
    }
}

// Update
async function editPost(req, res) {
    const { body } = req
    
    Post.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedPost) => {
        if(!err) {
            res.status(200).json(updatedPost)
        } else {
            res.status(400).json(err)
        }
    })
}

// Delete
async function deletePost(req, res) {
    Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if(!err) {
            res.status(200).json(deletedPost)
        } else {
            res.status(400).json(err)
        }
    })
}