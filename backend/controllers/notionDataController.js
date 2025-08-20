import notion from './notion.js';
import { databaseReqParams } from '../utils/index.js';

const Name = 'Nome'; // TODO: Use Localization?

// Get Query Notion Database
export const getNotionData = async (req, res) => {
  try {
    const reqPayload = {
      database_id: req.params.database_id,
      page_size: 100,
      ...databaseReqParams(req.query)
    };
    const response = await notion.databases.query(reqPayload);

    const simplified = response.results.map(page => {
      return {
        id: page.id,
        title: page.properties[Name]?.title?.[0]?.plain_text,
        created: page.created_time
      };
    });

    res.status(200).json(simplified)
  } catch (error) {
    console.error('apiError ==>> ', error);
    res.status(500).json({ apiError: error });
  }
};
