const
    supertest = require('supertest'),
    env = require('dotenv').config(),
    api = supertest(process.env.OMDB_BASE_URL);

const getMovieListSearch = (key, search) => api.get('')
    // .set('Content-Type', 'application/json')
    // .set('Accept', 'application/json')
    .query({apikey : key, s : search})

const getMovieListNoAPIKey = (search) => api.get('')
    // .set('Content-Type', 'application/json')
    // .set('Accept', 'application/json')
    .query({s : search})
const getMovieListSearchByYear = (key, search, year) => api.get('')
    // .set('Content-Type', 'application/jsonn')
    // .set('Accept', 'application/json')
    .query({apikey : key, s : search, y : year})

const getMovieListSearchByType = (key, search, typeMovie) => api.get('')
    .query({apikey : key, s : search, type : typeMovie})

const getMovieListSearchByPlot = (key, search, plot) => api.get('')
    .query({apikey : key, s : search, plot : plot})

module.exports = {
    getMovieListSearch,
    getMovieListNoAPIKey,
    getMovieListSearchByYear,
    getMovieListSearchByType,
    getMovieListSearchByPlot
}