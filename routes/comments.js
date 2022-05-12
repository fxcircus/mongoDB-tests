const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/comments')

// POST /api/comments
router.post('/', commentsCtrl.create)

// GET /api/comments
router.get('/', commentsCtrl.getAllComments)

// PUT /api/comments/_id
router.put('/:id', commentsCtrl.editComment)

// DELETE /api/comments/_id
router.delete('/:id', commentsCtrl.deleteComment)

module.exports = router