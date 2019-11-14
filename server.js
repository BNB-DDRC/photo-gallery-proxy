require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.use('/rooms/:id', express.static(path.join(__dirname, './public')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));