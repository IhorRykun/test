const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function init() {
  await client.connect();
  console.log('Connected successfully to server');

  return 'done.';
}

module.exports = {
  init,
  client
};
