import { movieDataMock } from './mock';
import { getImage, mapMovieData, MovieData } from './mapper';

describe('Mapper', () => {
    test('getImage', async () => {
        const baseUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
        const query = '/test';
        const result = getImage(query);
        expect(result).toMatch(`${baseUrl}${query}`);
    });

    test('mapMovieData', () => {
        const mock = {
            id: 12345,
            title: 'TestTitle',
            release_date: 'TestDate',
            overview: 'TestOverview',
            popularity: 'TestPopularity',
            poster_path: 'TestPoster',
        };
        let dataMapped: MovieData[] = mapMovieData([mock]);
        expect(dataMapped[0].id).toBe(mock.id);
        expect(dataMapped[0].title).toMatch(mock.title);
        expect(dataMapped[0].overview).toMatch(mock.overview);
        expect(dataMapped[0].date).toMatch(mock.release_date);
        expect(dataMapped[0].popularity).toMatch(mock.popularity);
        expect(dataMapped[0].poster).toMatch(mock.poster_path);

        const newMock = { ...mock, poster_path: null };
        dataMapped = mapMovieData([newMock]);
        expect(dataMapped[0].poster).toBeNull();
    });
});
