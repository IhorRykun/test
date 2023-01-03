import mongoose from 'mongoose';
import express from 'express';

const PORT = 5000;

const app = express();

app.use(express.json());
const DB_URL =
  'mongodb+srv://Ihor:<password>@cluster0.eai8zf9.mongodb.net/?retryWrites=true&w=majority';

app.listen(PORT, () => {
  console.log('server start working');
});

async function startAPP() {
  try { 
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log('server start working');
    });
  } catch (e) {
    console.log(e);
  }
}

app.get('/', (req, res) => {
  res.status(200).json('serever OK');
});

startAPP();
