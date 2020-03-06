var path = require("path");
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const server = app.listen(5000);
