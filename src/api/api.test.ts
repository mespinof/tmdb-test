import { getMovies } from './api';

describe('Api', () => {
    test('Should retrieve data or throw error', async () => {
        const movies = await getMovies('test');
        expect(movies).not.toBeUndefined();
        let message = false;
        try {
            await getMovies('');
        } catch (e) {
            message = e.errors[0];
        }
        expect(message).toBeTruthy();
    });
});
