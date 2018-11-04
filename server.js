const express = require('express');
const path = require('path');

const app = express();
const api = require('./server/routes/api');

app.use(express.static(path.join(__dirname, 'dist/IBM-NASA')));
app.use('/api', api);

// redirect all requests (except api) to the index page.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/IBM-NASA/index.html'));
});

const appPort = process.env.PORT || 4600;
app.listen(appPort, () => console.log(`listening on port ${appPort}`));
