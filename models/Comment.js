const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentSchema = new Schema ({
    text: { type: String, required: true },
    rendId: { type: Number, default: 1},
    post: { type: Schema.Types.ObjectId, ref: 'project' }
},{
    timestamps: true
})


module.exports = mongoose.model('Comment', commentSchema)