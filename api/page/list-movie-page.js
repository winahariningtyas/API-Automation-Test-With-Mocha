const
    supertest = require('supertest'),
    env = require('dotenv').config(),
    api = supertest(process.env.OMDB_BASE_URL);

const getMovieListSearch = (key, search) => api.get('')
    // .set('Content-Type', 'application/json')
    // .set('Accept', 'application/json')
    .query({apikey : key, s : search})

const getMovieListSearchByYear = (key, search, year) => api.get('')
// .set('Content-Type', 'application/json')
// .set('Accept', 'application/json')
    .query({apikey : key, s : search, y : year})

module.exports = {
    getMovieListSearch,
    getMovieListSearchByYear
}