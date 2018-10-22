'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');
var upload = multer();

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', upload.single('upfile'), function(req, res) {
  var obj = {};
  obj.name = req.file.originalname;
  obj.type = req.file.mimetype;
  obj.size = req.file.size;
  res.json(obj);
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Node.js listening ...');
});
