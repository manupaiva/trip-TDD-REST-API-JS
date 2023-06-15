import tripModel from '../models/trip.model';

export const getTripsService = async (query, page, limit) => {
  try {
    var trips = await tripModel.find(query);
    return trips;
  } catch (e) {
    throw Error('Error while /GET Trips');
  }
};

export const postTripService = async (body) => {
  try {
    var trip = await tripModel.create(body);
    return trip;
  } catch (e) {
    throw Error('Error while /POST a Trip', e.message);
  }
};

export const putTripService = async (req, res) => {
  try {
    var trip = await tripModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return trip;
  } catch (e) {
    throw Error('Error while /PUT a Trip', e.message);
  }
};

export const deleteTripService = async (req, res) => {
  try {
    var trip = await tripModel.findByIdAndDelete(req.params.id);
    return trip;
  } catch (e) {
    throw Error('Error while /DELETE a Trip', e.message);
  }
};
