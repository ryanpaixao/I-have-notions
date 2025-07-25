import cors from 'cors';
import express from 'express';

import notionDataRoutes from './routes/notionDataRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Routes
app.use('/api/notion', notionDataRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
