import request from 'supertest';
import app from '../server.js';

describe('Simple CI/CD Demo App', () => {

  it('GET / returns a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.body.message).toBeDefined();
  });

  it('GET / returns status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('GET /health returns UP status', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe('UP');
  });

  it('GET /health returns status 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
  });

});
