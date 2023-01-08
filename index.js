const experss = require('express');
const cors = require('cors');

const rticleRouter = require('./routers/articleRouter');

const app = experss();

app.use(cors());
app.use(experss.json());
app.use('./article', rticleRouter);

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log(`server running. Use our API on port: ${PORT}`);
});
