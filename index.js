import mongoose from 'mongoose';
import express from 'express';

const PORT = 5000;

const app = express();

app.use(express.json());
const DB_URL =
  'mongosh "mongodb+srv://cluster0.eai8zf9.mongodb.net/myFirstDatabase" --apiVersion 1 --username Ihor';

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

// app.get('/', (req, res) => {
//   res.status(200).json('serever Ok');
// });

startAPP();
