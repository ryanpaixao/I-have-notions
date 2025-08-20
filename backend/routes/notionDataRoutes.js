import express from 'express';
import { getNotionData } from '../controllers/notionDataController.js';
import { getBlockChildren } from '../controllers/notionBlockController.js';

const router = express.Router();

router.get('/query-data/:database_id', getNotionData);
router.get('/block/:block_id', getBlockChildren);

export default router;
