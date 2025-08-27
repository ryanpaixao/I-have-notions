import notion from './notion.js';

// utils
import { formatPageData } from '../utils/page.js';
import { formatBlockChildrenData } from '../utils/block.js';

// Get Aggregated Data from multiple Notion endpoints
export const getAggData = async (req, res) => {
  try {
    const [pageResponse, blockResponse] = await Promise.all([
      notion.pages.retrieve({ page_id: req.params.id, }),
      notion.blocks.children.list({ block_id: req.params.id, }),
    ]);
    const formatedPageData = formatPageData(pageResponse.properties);
    const formatedBlockData = formatBlockChildrenData(blockResponse.results);

    const formatedData = {
      page: formatedPageData,
      blocks: formatedBlockData,
    };

    res.status(200).json(formatedData);
  } catch (error) {
    console.error('apiError ==>> ', error);
    res.status(500).json({ apiError: error });
  };
};