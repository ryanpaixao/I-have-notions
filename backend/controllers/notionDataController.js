import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_KEY });
const Name = 'Nome'; // TODO: Use Localization?

// Get Query Notion Database
export const getNotionData = async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: req.params.database_id,
      page_size: 100,
    });

    // const simplified = response.results;
    const simplified = response.results.map(page => {
      return {
        id: page.id,
        title: page.properties[Name]?.title?.[0]?.plain_text,
        created: page.created_time
      };
    });

    res.status(200).json(simplified)
  } catch (error) {
    console.error(error);
    res.status(500).json({ apiError: error });
  }
};

// List Block Children of Page
export const getBlockChildren = async (req, res) => {
  try {
    const response = await notion.blocks.children.list({
      block_id: req.params.block_id,
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ apiError: error });
  };
};

// List Notion Users
export const getUsersList = async (req, res) => {
  try {
    const response = await notion.users.list();
    const results = response.results;

    res.status(200).json(results);
  } catch (error) {
    console.error('error ==>> ', error);
    res.status(500).json({ apiError: error });
  };
};
