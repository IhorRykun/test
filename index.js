const experss = require('express');
const cors = require('cors');
const { init } = require('./dataBase/mongoClient');
const articleRouter = require('./routers/articleRouter');

const app = experss();

// Mongo initialization
init();

app.use(cors());
app.use(experss.json());
app.use('/article', articleRouter);

app.get('/', (req, res) => {
  res.status(200).send('<h1>hello world</h1>');
});

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log(`server running. Use our API on port: ${PORT}`);
});
