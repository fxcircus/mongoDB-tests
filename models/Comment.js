// https://mongoosejs.com/docs/populate.html

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentSchema = new Schema ({
    text: { type: String, required: true },
    randId: { type: Number, default: 1},
    post: { type: Schema.Types.ObjectId, ref: 'Post' }
},{
    timestamps: true
})


module.exports = mongoose.model('Comment', commentSchema)