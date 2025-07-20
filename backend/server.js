require('dotenv').config();
const express = require('express');
const { Client } = require('@notionhq/client');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());

const notion = new Client({ auth: process.env.NOTION_KEY });

app.get('/notion-data', async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
    });

    const simplified = response.results.map(page => {
      return {
        id: page.id,
        title: page.properties.Name.title[0]?.plain_text,
        created: page.created_time
      };
    });

    res.status(200).json(simplified)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'API error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
