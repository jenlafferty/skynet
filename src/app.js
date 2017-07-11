var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! - Skynet!');
});

// Create the express router object for Photos
var terminatorRouter = express.Router();

terminatorRouter.get('/T800', function (req, res) {
  var result = {
    id: 'T800',
    target: 'Sarah Connor',
    destination_year: '1984',
    manufactured: '2029',
    design: 'Living tissue over a metal endoskeleton',
  };
  res.json(result);
});

// new stuff here
app.use('/api/v1/terminator', terminatorRouter);

app.listen(3005, function () {
  console.log('Example app listening on port 3005!');
});