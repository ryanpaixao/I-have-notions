import cors from 'cors';
import express from 'express';

import notionDataRoutes from './routes/notionDataRoutes.js';
import notionBlockRoutes from './routes/notionBlockRoutes.js';
import notionPageRoutes from './routes/notionPageRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Routes
app.use('/api/data', notionDataRoutes);
app.use('/api/block', notionBlockRoutes);
app.use('/api/page', notionPageRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
