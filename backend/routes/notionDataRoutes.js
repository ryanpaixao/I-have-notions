import express from 'express';
import { getNotionData } from '../controllers/notionDataController.js';

const router = express.Router();

router.get('/query-data/:database_id', getNotionData);

export default router;
