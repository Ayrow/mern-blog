import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';

const app = express();
dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome');
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log('error', error);
  }
};

start();
