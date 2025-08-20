import notion from './notion.js';
import { formatBlockChildrenData } from '../utils/index.js';

// List Block Children of Page
export const getBlockChildren = async (req, res) => {
  try {
    const pageTitle = await getPageTitle(req.params.block_id)
    const response = await notion.blocks.children.list({
      block_id: req.params.block_id,
    });
    const formatedData = {
      title: pageTitle,
      blocks: formatBlockChildrenData(response.results)
    };
    res.status(200).json(formatedData);
  } catch (error) {
    console.error('apiError ==>> ', error);
    res.status(500).json({ apiError: error });
  };
};

// Get pages properties
const getPageTitle = async (pageId) => {
  try {
    const response = await notion.pages.properties.retrieve({
      page_id: pageId,
      property_id: "title",
    });

    return response.results[0]?.title?.plain_text;
  } catch (error) {
    console.error('apiError ==>> ', error);
  }
};
