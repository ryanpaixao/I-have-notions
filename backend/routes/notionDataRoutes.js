import express from 'express';
import { getNotionData, getBlockChildren, getUsersList } from '../controllers/notionDataController.js';

const router = express.Router();

router.get('/query-data/:database_id', getNotionData);
router.get('/block/:block_id', getBlockChildren);
router.get('/users-list', getUsersList);

export default router;
