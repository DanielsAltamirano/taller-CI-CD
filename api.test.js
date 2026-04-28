const request = require('supertest');
const app = require('./api');

test('GET / Devuelve este mensaje!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello World!');
});

test('GET /suma Devuelve la suma de dos números', async () => {
    const res = await request(app).get('/suma').query({ a: 5, b: 3 });
    expect(res.text).toBe('La suma de 5 y 3 es 8');
});