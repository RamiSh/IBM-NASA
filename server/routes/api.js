const express = require('express');
const request = require('request');
const config = require('../../config');

const router = express.Router();

const sendError = (err, res) => {
  let response = {};

  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

router.get('/photos', (req, res) => {
  const pageRequested = req.query.page ? req.query.page : config.flickr.page;
  const perPageRequested = req.query.per_page ? req.query.per_page : config.flickr.perPage;
  const requestUrl = `${config.flickr.api.peoplePhotoUrl}&per_page=${perPageRequested}&page=${pageRequested}`;

  executeGet(requestUrl, res);
});

router.post('/photos', (req, res) => {
  const pageRequested = req.query.page ? req.query.page : config.flickr.page;
  const perPageRequested = req.query.per_page ? req.query.per_page : config.flickr.perPage;
  const searchText = req.body.searchText ? req.body.searchText : '';
  const requestUrl = `${config.flickr.api.searchPhotoUrl}&text=${searchText}&per_page=${perPageRequested}&page=${pageRequested}`;

  executeGet(requestUrl, res);
});

const executeGet = (requestUrl, res) => {
  request.get(requestUrl, (error, innerRes) => {
    if (error) {
      sendError(err, res);
    }
    var resAsJson = JSON.parse(innerRes.body);
    res.status(200).json(resAsJson.photos.photo);
  });
}
module.exports = router;
