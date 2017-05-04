define('page/firstFeature', ['jquery'], function($) {
  $('#foo').text('[YYYYYYY]');

  var _Methods = {
    doSomething: function() {
      console.log('do Something');
    }
  };

  var _print = {
    haha: function() {
      console.log('HAHA!');
    }
  };

  var _initialize = function(settings) {
    console.log(settings);
    var deferred = $.Deferred();
    return deferred.promise();
  };



  // return _Methods;

  return {
    Methods: _Methods,
    aa: _print,
    initialize: _initialize
  };

});