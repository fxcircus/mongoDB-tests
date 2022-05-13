const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/comments')

// GET /api/comments
router.get('/', commentsCtrl.getAllComments)

// POST /api/comments
router.post('/:id', commentsCtrl.create)



// PUT /api/comments/_id
router.put('/:id', commentsCtrl.editComment)

// DELETE /api/comments/_id
router.delete('/:id', commentsCtrl.deleteComment)

module.exports = router