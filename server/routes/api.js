const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to IBM-NASA');
});

module.exports = router;