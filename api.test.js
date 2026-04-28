const request = require('supertest');
const app = require('./api');

test('GET / Devuelve este mensaje!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello World!');
});