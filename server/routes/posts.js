import express from 'express';

import { getPosts, createPost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getPosts);
router.post('/',auth,  createPost);
router.delete('/:id', auth, deletePost);

export default router;