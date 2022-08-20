import express from "express";
import { getPosts , createPosts,updatePost, deletePost , likePost} from "../controllers/posts.js";
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts); 

// This is the route that will be called from the client

router.post('/', auth, createPosts);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost',auth,likePost);

export default router;