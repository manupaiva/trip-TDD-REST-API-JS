import {
  getTripsService,
  postTripService,
  putTripService,
  deleteTripService,
} from '../services/index';

export const getTrips = async (req, res, next) => {
  var page = req.params.page ? req.params.page : 1;
  var limit = req.params.limit ? req.params.limit : 10;

  try {
    var trips = await getTripsService({}, page, limit);
    return res.status(200).json(trips);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

export const postTrip = async (req, res, next) => {
  try {
    var trip = await postTripService(req.body);
    return res.status(200).json(trip);
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
};

export const putTrip = async (req, res, next) => {
  try {
    var trip = await putTripService(req);
    return res.status(200).json(trip);
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
};

export const deleteTrip = async (req, res, next) => {
  try {
    var trip = await deleteTripService(req);
    return res.status(200).json(trip);
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
};
