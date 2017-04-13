// var pubsub = {};

(function () {
  function Example() {
    // do nothing
  };

  Example.prototype = {
    initVariable: function() {
      this._store = {
        tempObj: {
          tempList: 'tempList',
          tempCount: 0
        }
      },
      this._conf = {
        temp: {
          apiName: 'tempAPI_Name',
          APIUrl: '127.0.0.1:8080'
        }
      }
    },

    initView: function () {
      if ($('#container').length > 0) {
        this.$container = $('#container');
      } else {
        alert('container error');
      }
    },

    logic: function() {
      var _self = this;
      var getData = function(str) {
        console.log(str);
        console.log(_self._conf.temp.apiName);
      };
      return {
        getTestData: getData
      };
    },

    loadInitData: function() {
      var _self = this;
      _self.logic().getTestData(_self._store.tempObj.tempList);
    },

    init: function() {
      this.initVariable();
      this.initView();
      this.loadInitData();
      //this.bindUI();
    }
  };

  var example = new Example();
  example.init();
}) ();

