const request = require('supertest');
const app = require('../index');

describe('Testes de Endpoint', () => {
    it('Deve retornar status 200 no GET /', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
    });
});