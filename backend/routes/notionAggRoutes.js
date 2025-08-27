import express from 'express';
import { getAggData } from '../controllers/notionAggController.js';

const router = express.Router();

router.get('/:id', getAggData);

export default router;
