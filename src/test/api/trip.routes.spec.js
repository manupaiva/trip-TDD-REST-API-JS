import supertest from 'supertest';
import { app, server } from '../../index';

const request = supertest(app);

describe('Trips suite: testing trip REST API', () => {
  // Close server after test
  afterAll((done) => {
    server.close(done);
  });

  it('GET /api/v1/ - health check', async () => {
    const response = await request.get('/api/v1').send();
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Health check passed' });
    expect(response.headers['content-type']).toContain('json');
  });

  it('GET /api/v1/trips - data check', async () => {
    const response = await request.get('/api/v1/trips').send();
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('json');
  });
});
