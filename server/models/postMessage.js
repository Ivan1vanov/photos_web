import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    creator: String,
    selectedFile: String,
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;