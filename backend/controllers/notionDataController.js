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
    console.error('apiError ==>> ', error);
    res.status(500).json({ apiError: error });
  }
};

const formatBlockChildrenData = (data) => {
  const formatedData = [];

  if (Array.isArray(data)) {
    data.forEach((textObj) => {
      const richText = textObj?.paragraph?.rich_text

      if (Array.isArray(richText)) {
        richText.forEach((textObj) => {
          textObj?.plain_text && formatedData.push(textObj.plain_text);
        });
      }
    });
  }

  return formatedData;
};

// List Block Children of Page
export const getBlockChildren = async (req, res) => {
  try {
    const response = await notion.blocks.children.list({
      block_id: req.params.block_id,
    });
    const formatedData = formatBlockChildrenData(response.results);
    res.status(200).json(formatedData);
  } catch (error) {
    console.error('apiError ==>> ', error);
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
    console.error('apiError ==>> ', error);
    res.status(500).json({ apiError: error });
  };
};
