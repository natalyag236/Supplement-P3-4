const request = require('supertest');
const app = require('./Server');

describe('POST /', () => {
  it('should return the content field from the request body', async () => {
    const payload = { content: 'SnowFall!' };

    const response = await request(app)
      .post('/')
      .send(payload)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.content).toBe('SnowFall!');
  });
});
