import express from 'express';
import { getPageData } from '../controllers/notionPageController.js';

const router = express.Router();

router.get('/:page_id', getPageData);

export default router;
