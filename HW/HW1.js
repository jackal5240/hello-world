(function () {
	/*
  var template = $('#template').html();
  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, {name: "Luke"});
  $('#target').html(Mustache.render(template, {name: "Luke"}));
  */

  if ($('#container').length > 0) {
    var $container = $('#container');
  } else {
    alert('No container');
  }

  var _tmpl = {
    template: $('#template').html()
  };

  var _dataStore = {
    list: [],
    store: {
      dataList: [],
      pageIndex: []
    },
    pageCount: 10
  };

  var _render = {
    renderContainer: function () {
      console.log(_dataStore);
      $container.html(Mustache.render(_tmpl.template, {list: _dataStore.store}));
    }
  };

  /*
  var util = {
    getAjaxData: function () {}
  };
  */

  var _logic = {
    getDataByPage: function (page) {
      var start = (page - 1) * _dataStore.pageCount;
      var length = start + _dataStore.pageCount;
      var returnData = [];
      for (var i = start; i < length; i++) {
        returnData.push(_dataStore.list[i]);
      }
      return returnData;
    }
  };

  _init = function() {
    $('#container').on('click', '[data-func="changePage"]', function(event) {
      _dataStore.store.dataList = _logic.getDataByPage($(this).data('pagenumber'));
      console.log(_dataStore.store.dataList);
      _render.renderContainer();
    });
  };

  _init();

  $.getJSON('data.json', function(data) {
    _dataStore.list = data;
    var allpage = Math.ceil(data.length / _dataStore.pageCount);

    for (var i = 0; i < allpage; i++) {
      _dataStore.store.pageIndex.push({indexString: i + 1});
    }
    _dataStore.store.dataList = _logic.getDataByPage(1);
    _render.renderContainer();
  });

}) ();