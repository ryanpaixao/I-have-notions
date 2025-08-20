import express from 'express';
import { getBlockChildren } from '../controllers/notionBlockController.js';

const router = express.Router();

router.get('/:block_id', getBlockChildren);

export default router;
