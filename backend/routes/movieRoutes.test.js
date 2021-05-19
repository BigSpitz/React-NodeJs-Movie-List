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

const requestBody = {
  genre: '',
  page: 1,
  title: '',
};

const testMovieApiCall = (overrides = {}) => {
  return request(app)
    .post('/movie/search')
    .set('Content-type', 'application/vnd.api+json')
    .set('accept', 'application/vnd.api+json')
    .send({ ...requestBody, ...overrides });
};

describe('POST /movie', () => {
  describe('get movies with correct criteria', () => {
    test('should respond with a 200 status code', async (done) => {
      const response = await testMovieApiCall();
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body.data)).toBeTruthy();
      expect(Number.isInteger(response.body.meta.totalItems)).toBeTruthy();
      done();
    });
  });
  describe('get error with wrong criteria', () => {
    test('should respond with a 400 status code with invalid title', async (done) => {
      const undefinedResponse = await testMovieApiCall({ title: undefined });
      expect(undefinedResponse.statusCode).toBe(400);
      const nullResponse = await testMovieApiCall({ title: null });
      expect(nullResponse.statusCode).toBe(400);
      done();
    });
    test('should respond with a 400 status code with invalid genre', async (done) => {
      const undefinedResponse = await testMovieApiCall({ genre: undefined });
      expect(undefinedResponse.statusCode).toBe(400);
      const nullResponse = await testMovieApiCall({ genre: null });
      expect(nullResponse.statusCode).toBe(400);
      done();
    });
    test('should respond with a 400 status code with invalid page', async (done) => {
      const undefinedResponse = await testMovieApiCall({ page: undefined });
      expect(undefinedResponse.statusCode).toBe(400);
      const nullResponse = await testMovieApiCall({ page: null });
      expect(nullResponse.statusCode).toBe(400);
      const lessThanOneResponse = await testMovieApiCall({ page: 0 });
      expect(lessThanOneResponse.statusCode).toBe(400);
      const stringResponse = await testMovieApiCall({ page: 'test' });
      expect(stringResponse.statusCode).toBe(400);
      const floatResponse = await testMovieApiCall({ page: 0.2 });
      expect(floatResponse.statusCode).toBe(400);
      done();
    });
  });
});
