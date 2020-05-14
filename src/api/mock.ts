export const movieDataMock = {
    id: 12345,
    title: 'TestTitle',
    date: 'TestDate',
    overview: 'TestOverview',
    popularity: 'TestPopularity',
    poster: 'TestPoster',
};

export const ratedMovieMock = {
    ...movieDataMock,
    rating: 3,
    comment: 'TestComment',
};
