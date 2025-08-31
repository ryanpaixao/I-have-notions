import express from 'express';
import { getNotionData, getNotionGlossaryData } from '../controllers/notionDataController.js';

const router = express.Router();

router.get('/query-data/:database_id', getNotionData);
router.get('/query-glossary/:database_id', getNotionGlossaryData);

export default router;
