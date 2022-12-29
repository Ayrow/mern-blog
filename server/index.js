import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome');
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log('error', error);
  }
};

start();
