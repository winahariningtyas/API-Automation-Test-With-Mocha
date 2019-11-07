const
    assert = require('chai').expect,
    page = require('../page/list-movie-page.js');

const testCase = {
    "positive" : {
        "getList" : "As a User, I want to be able to get OMDB Movie list",
        "getListByYear" : "As a User, I want to be able to get OMDB Movie List By Year"
    },
    "negative" : {
        "noSearch" : "As a User, I should got error message when I send request without key of search",
        "invalidApiKey" : "As a User, I should got error 401 when I send request with invalid API Key",
        "noApiKey" : "As a User, I should got error message when I send request without API Key Params"
    }
}

describe(`OMDB Movie List`, () => {
    const
        apiKey = '480ff1',
        invalidApiKey = 'loveeehehe',
        keySearch = 'love',
        year = '2011';

        it(`@get ${testCase.positive.getList}`, async() => {
            const response = await page.getMovieListSearch(apiKey, keySearch);
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

        it(`@get ${testCase.negative.invalidApiKey}`, async() => {
            const response = await page.getMovieListSearch('', keySearch);
            assert(response.status).to.equal(401, response.body.Error);
            assert(response.body.Response).to.equal('False');
            assert(response.body.Error).to.equal('No API key provided.');
        }),

        it(`@get ${testCase.positive.getListByYear}`, async() => {
            const response = await page.getMovieListSearchByYear(apiKey, keySearch, 'xxx');
            assert(response.status).to.equal(200);
         })
})