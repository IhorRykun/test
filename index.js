import experss from 'express';
import cors from 'cors';

const app = experss();

app.use(cors());
app.use(experss.json());

app.use(experss.json());

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log(`server running. Use our API on port: ${PORT}`);
});
