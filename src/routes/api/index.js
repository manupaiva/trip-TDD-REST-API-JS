//API ROUTER
import express from 'express';
const router = express.Router();
import {
  getTrips,
  postTrip,
  putTrip,
  deleteTrip,
} from '../../controllers/index';

router.get('/v1/trips', getTrips);
router.post('/v1/trips', postTrip);
router.put('/v1/trips/:id', putTrip);
router.delete('/v1/trips/:id', deleteTrip);
export { router };
