import request from 'supertest';
import app from '../app.js';

let server, agent;

beforeEach((done) => {
  server = app.listen(4000, (err) => {
    if (err) return done(err);

    agent = request.agent(server);
    done();
  });
});

afterEach((done) => {
  return server && server.close(done);
});

describe('GET /genres', () => {
  describe('get all genres', () => {
    test('should respond with a 200 status code', async (done) => {
      const response = await request(app)
        .get('/genre')
        .set('Accept', 'application/vnd.api+json');
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body.data)).toBeTruthy();
      done();
    });
  });
});
