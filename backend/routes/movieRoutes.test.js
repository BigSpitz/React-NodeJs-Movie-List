import request from 'supertest';
import app from '../app.js';

let server, agent;

beforeEach((done) => {
  server = app.listen(4001, (err) => {
    if (err) return done(err);

    agent = request.agent(server);
    done();
  });
});

afterEach((done) => {
  return server && server.close(done);
});

describe('POST /movie', () => {
  describe('get movies with correct criteria', () => {
    test('should respond with a 200 status code', async (done) => {
      const response = await request(app).post('/movie/search', {
        title: '',
        genres: '',
        page: 1,
      });
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body.movies)).toBeTruthy();
      expect(Number.isInteger(response.body.totalItems)).toBeTruthy();
      done();
    });
  });
});
