import supertest from 'supertest';
import { app, server } from '../index';
import mongoose from 'mongoose';

const request = supertest(app);

describe('Trips suite: testing Healt Ckeck', () => {
  // Close server after test
  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  it('GET / - health check', async () => {
    const response = await request.get('/').send();
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Health check passed' });
    expect(response.headers['content-type']).toContain('json');
  });
});
