(function () {
  function MainFunction () {
    // do nothing;
  };

  MainFunction.prototype = {

    // initVariable: function () {},
    // initVariable: function () {},
    // loadInitData: function () {},
    // renderContainer: function (renderObj) {
    //   this.mustacheRender(this.$container, this._tmpl.container, renderObj);
    // },
    // mustacheRender: function (renderTarget, tmpl, tmplModel) {
    //   if (tmpl === undefined) {
    //     return ;
    //   }

    //   var rendered = Mustache.render(tmpl, tmplModel);
    //   renderTarget.html(rendered);
    // },
    // bindUI: function () {},
    // getData: function () {},
    // changeBtnEvent: function () {},
    // init: function () {}


    initVariable: function () {
      this._conf = {
        firstApi: {
          apiName: '',
          apiUrl: '',
          localUrl: ''
        }
      };
      this._store = {
        dataObj: {
          dataList: [],
          // responseStatus: false,
          hasData: false
        }
      };
    },

    initView: function () {
      if ($('#container').length > 0) {
        this.$container = $('#container');
      } else {
        alert('container error!');
      }

      this._tmpl = {
        container: $('#tpContainer').html()
      };
    },

    loadInitData: function () {
      var _self = this;
      _self.getData()
        .then(function (returnObj) {
          // do something
          _self._store.dataObj = returnObj;
          _self.renderContainer(_self._store.dataObj);
        })
        .fail(function (error) {
          console.log(error.message);
        });
    },

    renderContainer: function (renderObj) {
      this.mustacheRender(this.$container, this._tmpl.container, renderObj);
    },

    mustacheRender: function (renderTarget, tmpl, tmplModel) {
      if (tmpl === undefined) {
        return ;
      }

      var rendered = Mustache.render(tmpl, tmplModel);
      renderTarget.html(rendered);
    },

    bindUI: function () {
      var _self = this;
      _self.$container
        .on('click', '[data-fe-func="changeSomething"]', function () {
          // do something
        })
        ;
    },

    getData: function () {
      var _self = this;
      var deferred = $.Deferred();
      $.ajax({
        type: 'POST',
        url: _self._conf.firstApi.apiUrl,
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
            var error = 'Api responseResult length === 0 !';
            deferred.reject({fail: true, message: responseObj.message? responseObj.message: error});
          }
        } else {
          var error = 'Api responseStatus error !';
          deferred.reject({fail: true, message: responseObj.message? responseObj.message: error});
        }
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        if (textStatus === 'timeout') {
          alert('Request timeout!!');
        }
        deferred.reject({fail: true, message: errorThrown? errorThrown: jqXHR.responseText});
      });
    },

    init: function () {
      this.initVariable();
      this.initView();
      this.loadInitData();
      this.bindUI();
    }
  };

  var mainFunc = new MainFunction();
  mainFunc.init();
}) ();