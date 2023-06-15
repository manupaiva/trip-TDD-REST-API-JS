import supertest from 'supertest';
import { app, server } from '../../index';
import mongoose from 'mongoose';
import config from './../../config';
import tripModel from '../../models/trip.model';
const request = supertest(app);

describe('Trips suite: testing trip REST API', () => {
  afterAll(async () => {
    await tripModel.deleteMany({ name: 'testname' });
    await mongoose.connection.close();
    server.close();
  });

  describe('GET suite', () => {
    it('GET /api/v1/trips - data check', async () => {
      const response = await request.get('/api/v1/trips').send();
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('json');
    });
  });

  describe('POST suite', () => {
    const passTripForTest = {
      name: 'testname',
      destination: 'Test destination',
      description: 'test description',
      category: 'family',
      startDate: '2014-01-01',
    };
    const failTripForTest = {
      destination: 'Test destination',
    };

    it('POST /api/v1/trips - health check', async () => {
      const response = await request
        .post('/api/v1/trips')
        .send(passTripForTest);
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('json');
    });

    it('POST /api/v1/trips - pass request', async () => {
      const response = await request
        .post('/api/v1/trips')
        .send(passTripForTest);
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('json');
      expect(response.body._id).toBeDefined();
      expect(response.body.name).toBe(passTripForTest.name);
    });

    it('POST /api/v1/trips - fail request', async () => {
      const response = await request
        .post('/api/v1/trips')
        .send(failTripForTest);
      expect(response.status).toBe(500);
      expect(response.headers['content-type']).toContain('json');
    });
  });

  describe('PUT suite', () => {
    let trip;
    beforeAll(async () => {
      trip = await tripModel.create({
        name: 'trip name',
        destination: 'Test destination',
        description: 'test description',
        category: 'family',
        startDate: '2014-01-01',
      });
    });

    afterAll(async () => {
      await tripModel.findOneAndDelete({ _id: trip._id });
    });

    it('PUT /api/v1/trips - health check', async () => {
      const response = await request
        .put(`/api/v1/trips/${trip._id}`)
        .send({ name: 'change the name' });
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('json');
    });
  });

  describe('DELETE suite', () => {
    let trip;
    let response;

    beforeEach(async () => {
      trip = await tripModel.create({
        name: 'trip to delete',
        destination: 'Test destination',
        description: 'test description',
        category: 'family',
        startDate: '2014-01-01',
      });
      response = await request.delete(`/api/v1/trip/${trip._id}`).send();
    });

    it('DELETE /api/v1/trips - health check', async () => {
      expect(response).toBeDefined();
      const foundTrip = await tripModel.findById(response._id);
      expect(foundTrip).toBeNull();
    });
  });
});
