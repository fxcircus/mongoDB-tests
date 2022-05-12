const Comment = require('../models/Comment')

module.exports = {
    create,
    getAllComments,
    editComment,
    deleteComment
}

// Create
async function create(req, res) {
    try {
        const createdPost = await Comment.create(req.body)
        res.status(200).json(createdPost)
    } catch(e) {
        res.status(400).json(e)
    }
}

// Read
async function getAllComments(req, res) {
    try {
        const commments = await Comment.find({})
        res.status(200).json(commments)
    } catch(e) {
        res.status(400).json(e)
    }
}

// Update
async function editComment(req, res) {
    const { body } = req
    
    Comment.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedComment) => {
        if(!err) {
            res.status(200).json(updatedComment)
        } else {
            res.status(400).json(err)
        }
    })
}

// Delete
async function deleteComment(req, res) {
    Comment.findByIdAndDelete(req.params.id, (err, deletedComment) => {
        if(!err) {
            res.status(200).json(deletedComment)
        } else {
            res.status(400).json(err)
        }
    })
}