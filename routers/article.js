import express from 'express';
const router = express.Router();

router.get('/', async (req, res, next) => {
 res.status(200).json({message:`message`})
});

router.post('/', async (req, res, next) => {
  res.json({ message: `message` });
});

router.delete('/:artivleId', async (req, res, next) => {
  res.json({ message: `message` });
});

module.exports = router;
