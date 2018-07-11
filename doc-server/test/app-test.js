/* eslint no-console: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
const expect = require('expect');
const request = require('supertest');

const { app } = require('../app');

describe('App integration tests', () => {
  it('should return the root message', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        expect(res.text).toEqual('Hello DiscoverOrg!!!');
      })
      .end(done);
  });
});
