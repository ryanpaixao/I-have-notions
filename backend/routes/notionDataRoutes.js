import express from 'express';
import { getNotionData, getBlockChildren, getUsersList } from '../controllers/notionDataController.js';

const router = express.Router();

router.get('/query-data/:database_id', getNotionData);
router.get('/users-list', getUsersList);
router.get('/block-children-list/:block_id', getBlockChildren);

export default router;
