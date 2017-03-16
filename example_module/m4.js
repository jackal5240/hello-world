// var pubsub = {};

var pubsub = (function(myObject) {
  var _init = function() {
    console.log('aaa');
  };

  return {
    init: function() {
        _init();
    }
  }

}) ( pubsub );
console.log('m4 start');
pubsub.init();


var m = (function (Module) {
  Module.hello = function () {
    console.log('m.hello');
  };
  return Module;
}) (m || {});

m.hello();


var a = (function (my) {
  var my = {};
  my.hello = function () {
    console.log('a.Hello');
  };
  return my;
} (a));
a.hello();