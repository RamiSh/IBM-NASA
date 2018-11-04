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
  var pageRequested = req.query.page;
  pageRequested = !pageRequested ? config.flickr.page : pageRequested;

  var perPageRequested = req.query.perPage;
  perPageRequested = !perPageRequested ? config.flickr.perPage : perPageRequested;

  const requestUrl = `${config.flickr.defaultRest}&per_page=${perPageRequested}&page=${pageRequested}`;

  request.get(requestUrl, (error, innerRes) => {
    if (error) {
      sendError(err, res);
    }
    var resAsJson = JSON.parse(innerRes.body);
    res.status(200).json(resAsJson.photos.photo);
  });
});



module.exports = router;
