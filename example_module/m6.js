(function() {
  var _conf = {
    data: {
      apiName: 'jobTitle',
      APIUrl: 'data.json'
    }
  };

  var _store = {
    data: {
      list: [],
      hasData: false,
      // responseStatus: false
    }
  };

  var _logic = {
    getData: function() {
      var deferred = $.Deferred();
      console.log('getData function start');

      $.ajax({
        type: 'GET',
        //url: _conf.data.APIUrl,
        url: 'http://httpbin.org',
        dataType: 'json',
        //async: false,
        cache: false,
        timeout: 10000,
        headers: { 'Access-Control-Allow-Origin': '*' },
        data: {}
      })
      .then(function(response) {
        if (response.status.toUpperCase() == 'SUCCESS') {
          // Ajax == success , http == 200
          console.log(_conf.data.APIUrl);
          deferred.resolve(response);
        }
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        if (textStatus === 'timeout') {
          alert('time out');
        }
        deferred.reject({fail: true, message: errorThrown? errorThrown : jqXHR.responseText});
      });

      return deferred.resolve();

    }
  };

  var _init = function() {
    _logic.getData()
      .then(function(response) {
        console.log(_conf.data.APIUrl);
        console.log(response);
        console.log('_init');
      })
      .fail(function(error) {
        console.log('fail');
      });
  };

  _init();
}) ();