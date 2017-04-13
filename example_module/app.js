var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.all('*', function(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'X-Requested-With');
  response.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  response.header('X-Powered-By', '3.2.1');
  response.header('Content-type', 'application/json;charset=utf-8');
  next();
});

app.post('/getData', function (request, response) {
  var _result = {};
  _result.list = [];

  for (var i = 0; i < 10; i++) {
    var _temp = {};
    _temp.name = 'name' + i;
    _temp.id = i;
    _result.list.push(_temp);
  }

  var _returnData = {};
  _returnData.result = _result;
  _returnData.message = 'It is a message!';
  _returnData.status = 'SUCCESS';

  response.send(_returnData);
  response.end();
});

