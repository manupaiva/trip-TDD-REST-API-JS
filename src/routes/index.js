//GLOBAL ROUTER
import express from 'express';
const router = express.Router();
import { router as apiRouter } from './api/index';

router.use('/api', apiRouter);

router.get('/', (req, res) => {
  res.json({ message: 'Health check passed' });
});

export { router };
