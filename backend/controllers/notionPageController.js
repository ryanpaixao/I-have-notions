import notion from './notion.js';
import { formatPageData } from '../utils/page.js';

// Get page data
export const getPageData = async (req, res) => {
  try {
    console.log('params ==>>', req.params);
    const response = await notion.pages.retrieve({
      page_id: req.params.page_id,
    });
    console.log('res ==>>', response);
    const formatedData = formatPageData(response.properties);

    res.status(200).json(formatedData);
  } catch (error) {
    console.error('apiError ==>> ', error);
    res.status(500).json({ apiError: error });
  };
};
