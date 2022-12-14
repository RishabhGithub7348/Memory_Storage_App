import mangoose from 'mongoose';
const postSchema =  mangoose.Schema({
  title: String, 
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile : String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt:{
       type: Date,
       default: Date.now()
  }


})

const PostMessage = mangoose.model('PostMessage', postSchema);

export default PostMessage;