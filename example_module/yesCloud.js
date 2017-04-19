(function () {
  if ($('#container').length > 0) {
    var $container = $('#container');
  } else {
    alert('container error !');
  }
  // var _store = {};
  // var _conf = {};
  // var _tmpl = {};
  // var _util = {};
  // var _logic = {};
  // var _renderUI = {};
  // var _bindUI = function () {};
  // var _init = function () {};

  var _store = {
    dataObj: {
      dataList: [],
      // responseStatus: false,
      hasData: false
    }
  };

  var _conf = {
    firstApi: {
      apiName: '',
      apiUrl: '',
      localUrl: ''
    }
  };

  var _tmpl = {
    $container: $('#tpContainer').html()
  };

  var _util = {
    clearPreRequest: function (url) {
      var pendingRequests = {};
      $.ajaxPrefilter (function (options, originalOptions, jqXHR) {
        // var key = options.url;
        var key = url;
        if (!pendingRequests[key]) {
          pendingRequests[key] = jqXHR;
        } else {
          //cancel later request
          //jqXHR.abort();
          //cancel previously request
          pendingRequests[key].abort();
        }

        var success = options.success;
        options.success = function (jqXHR, textStatus) {
          if ($.isFunction (success)) {
            success.apply(this, arguments);
          }
        };

        var error = options.error;
        options.error = function (jqXHR, textStatus) {
          if ($.isFunction(error)) {
            error.apply(this, arguments);
          }
        };

        var complete = options.complete;
        options.complete = function (jqXHR, textStatus) {
          pendingRequests[key] = null;
          if (jQuery.isFunction(complete)) {
            complete.apply(this, arguments);
          }
        };
      });
    }
  };

  var _logic = {
    getData: function () {
      _util.clearPreRequest(_con.firstApi.apiUrl);

      var deferred = $.Deferred();
      $.ajax({
        type: 'POST',
        url: _conf.firstApi.apiUrl,
        dataType: 'json',
        // async: false,
        cache: false,
        timeout: 10000,
        data: {
          cmd: 'apiCmd',
          param: 'apiParam'
        }
      })
      .then(function (responseObj) {
        if (responseObj.status && responseObj.status.toUpperCase() === 'SUCCESS') {
          if (responseObj.result.length > 0) {
            deferred.resolve(responseObj);
          } else {
            var error = 'Api responseResult length === 0';
            deferred.reject({fail: true, message: responseObj.message? responseObj.message: error});
          }
        } else {
          var error = 'Api responseStatus error!';
          deferred.reject({fail: true, message: responseObj.message? responseObj.message: error});
        }
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        if (textStatus === 'timeout') {
          alert ('timeout');
        }
        deferred.reject({fail: true, message: errorThrown? errorThrown: jqXHR.responseText});
      });
    }
  };

  var _renderUI = {
    firstRender: function () {
      $container.html(Mustache.reder(_tmpl.container, _store.dataObj));
    }
  };

  var _bindUI = function () {
    $container
      .on('click', '[data-fe-func="ChangeSomething"]', function() {
        // do something
      })
      ;
  };

  var _init = function () {
    _logic.getData()
      .then(function (returnObj) {
        _store.dataObj = returnObj;
        _renderUI.firstRender();
      })
      .fail(function (error) {
        console.log(error);
      });
    _bindUI();
  };

  _init();
}) ();