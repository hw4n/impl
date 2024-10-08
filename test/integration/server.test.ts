import request from 'supertest';
import { application, Shutdown } from '../../src/server';

describe('Our Application', () => {
    afterAll((done) => {
        Shutdown(done);
    });

    it('starts and has proper environment', async () => {
        expect(process.env.NODE_ENV).toBe('test');
        expect(application).toBeDefined();
    }, 10000);

    it('returns all http methods allowed', async () => {
        const response = await request(application).options('/');
        expect(response.status).toBe(200);
        expect(response.headers['access-control-allow-methods']).toBe('GET, POST, PUT, PATCH, DELETE');
    });
});
