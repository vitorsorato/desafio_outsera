const request = require('supertest');
const app = require('../src/app');

describe('GET /api/producers/intervals', () => {
  it('should return producers with min and max intervals', async () => {
    const response = await request(app).get('/api/producers/intervals');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('min');
    expect(response.body).toHaveProperty('max');
  });
});
