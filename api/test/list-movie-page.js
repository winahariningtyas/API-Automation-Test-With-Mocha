const
    assert = require('chai').expect,
    page = require('../page/list-movie-page.js');

const testCase =
    {
    "positive" : {
        "getList" : "User want to get OMDB Movie list",
        "getListByYear" : "User want to get OMDB Movie List By Year",
        "getListByType" : "User want to get OMDB Movie List only following in type series",
        "getListByPlot" : "User want to get OMDB Movie List By Plot"
    },
    "negative" : {
        "noSearch" : "User should got error message when User send request without key of search",
        "invalidApiKey" : "User should got error 401 when User send request with invalid API Key",
        "noApiKey" : "User should got error message when User send request without API Key Params",
        "invalidTypeMovie" : "User should got status code 200 but response is false"
    }
}

describe(`OMDB Movie List`, () => {
    const
        apiKey = '480ff1',
        invalidApiKey = '19asx99',
        keySearch = 'love',
        year = '2011';

        it(`@get ${testCase.positive.getList}`, async() => {
            const response = await page.getMovieListSearch(apiKey, keySearch);
            assert(response.status).to.equal(200);
        }),

        it(`@get ${testCase.positive.getListByYear}`, async() => {
            const response = await page.getMovieListSearchByYear(apiKey, keySearch, year);
            assert(response.status).to.equal(200);
         }),

        it(`@get ${testCase.positive.getListByType}`, async() => {
            const response = await page.getMovieListSearchByType(apiKey, keySearch, 'episode');
            assert(response.status).to.equal(200);
        }),

        it(`@get ${testCase.positive.getListByType}`, async() => {
            const response = await page.getMovieListSearchByType(apiKey, keySearch, 'movie');
            assert(response.status).to.equal(200);
        }),

        it(`@get ${testCase.positive.getListByType}`, async() => {
            const response = await page.getMovieListSearchByType(apiKey, keySearch, 'series');
            assert(response.status).to.equal(200);
        }),

        it(`@get ${testCase.positive.getListByPlot}`, async() => {
            const response = await page.getMovieListSearchByPlot(apiKey, keySearch, 'short');
            assert(response.status).to.equal(200);
        }),

        it(`@get ${testCase.positive.getListByPlot}`, async() => {
            const response = await page.getMovieListSearchByPlot(apiKey, keySearch, 'full');
            assert(response.status).to.equal(200);
        }),

        it(`@get ${testCase.negative.noSearch}`, async() => {
            const response = await page.getMovieListSearch(apiKey, '');
            assert(response.status).to.equal(200, response.body.Error);
            assert(response.body.Response).to.equal('False');
            assert(response.body.Error).to.equal('Something went wrong.');
        }),

        it(`@get ${testCase.negative.invalidApiKey}`, async() => {
            const response = await page.getMovieListSearch(invalidApiKey, keySearch);
            assert(response.status).to.equal(401, response.body.Error);
            assert(response.body.Response).to.equal('False');
            assert(response.body.Error).to.equal('Invalid API key!');
        }),

         it(`@get ${testCase.negative.noApiKey}`, async() => {
            const response = await page.getMovieListNoAPIKey(keySearch);
            assert(response.status).to.equal(401, response.body.Error);
            assert(response.body.Response).to.equal('False');
            assert(response.body.Error).to.equal('No API key provided.');
        }),

        it(`@get ${testCase.negative.invalidTypeMovie}`, async() => {
            const response = await page.getMovieListSearchByType(apiKey, keySearch, 'cinema');
            assert(response.status).to.equal(200);
            assert(response.body.Response).to.equal('False');
            assert(response.body.Error).to.equal('Movie not found!');
        })
})