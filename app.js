/*server setup*/
const express = require('express');
const app = express();

app.use('/public', express.static('public'));
app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/landing.html');
});

app.listen(3000, function() {
  console.log('Server is Running on Port 3000');
  console.log(__dirname);
});

