const express = require('express')
const router = express.Router()
const postsCtrl = require('../controllers/posts')

// POST /api/posts
router.post('/', postsCtrl.create)

// GET /api/posts
router.get('/', postsCtrl.getAllPosts)

// GET /api/posts/:id
router.get('/:id', postsCtrl.getOnePost)

// PUT /api/posts/_id
router.put('/:id', postsCtrl.editPost)

// DELETE /api/posts/_id
router.delete('/:id', postsCtrl.deletePost)


module.exports = router