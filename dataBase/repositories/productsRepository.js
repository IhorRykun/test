const { client } = require('../mongoClient');

const db = client.db('shop');
const collection = db.collection('products');

const getProducts = async () => {
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
  return findResult;
};

const getProducts = async () => {
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
  return findResult;
};

const getProducts = async () => {
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
  return findResult;
};

const getProducts = async () => {
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
  return findResult;
};


module.exports = {
  getProducts
};
