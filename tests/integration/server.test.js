const request = require('supertest');
const app = require('../../src/server');

describe('server', () => {
  test('GET /health returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /api/game returns configuration', async () => {
    const res = await request(app).get('/api/game');
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Simple Game');
  });
});
