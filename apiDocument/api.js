;(function($, conf) {
  var $_main = $('#documentMain'),
      _apiList = [];
  
  $_main
    .on('click', '#searchBtn', function(e) {
      $_main.trigger('apiListRefresh');
    })
    .on('click', '[data-cc-func="showImg"]', function() {

      console.log({
        name: $(this).data('ccParamName'),
        src: $(this).data('ccParamImg')
      });

      $(Mustache.render($('#x2b_api_image').html(), {
        name: $(this).data('ccParamName'),
        src: $(this).data('ccParamSrc')
      }))
        .prependTo('body')
        .on('hide.bs.modal', function() {
          $(this).remove();
        })
        .modal();
    })
    .on('click', '[data-cc-func="openTest"]', function() {
      var i = _apiList.length,
          apiJSON = {};
   
      while(i--) {
        if(_apiList[i].name === $(this).data('ccApiName')) {
          apiJSON = _apiList[i];
          break;
        }
      }

      $(Mustache.render($('#x2b_api_tester').html(), apiJSON))
        .prependTo('body')
        .on('hide.bs.modal', function() {
          $(this).remove();
        })
        .on('click', '[data-cc-func="apiSubmit"]', function(){
          alert('暫無測試');
        })
        .modal();
    })
    .on('apiListRefresh', function() {
      var keyword = $('input[name="keyword"]', $_main).val(),
          catalog = $('select[name="catalog"]', $_main).val()
          apiId = $('select[name="searchApiId"]', $_main).val(),
          viewJSON = [];
      catalog = catalog == 'all' ? '' : catalog;

      $('div.api-list', $_main)
        .empty()
        .html(Mustache.render($('#x2b_api_list').html(), {
          'apis': $.grep($.map(_apiList, function(apiElement) {
            //if(keyword != '' && apiElement.name.indexOf(keyword) == '-1') return false;

            if(catalog != '' && apiElement.catalog != catalog) return false;

            if(apiId != '' && apiId != apiElement.name) return false;

            if(apiElement.params.length <= 0) apiElement.params = false;

            var jsonViewId = 'returnJSON_' + apiElement.name + '_' + $.now();
            viewJSON.push({
              id: jsonViewId,
              json: apiElement.return
            });
            apiElement.returnId = jsonViewId;
            apiElement.hasParamsOptions = apiElement.note.paramsOptions.length > 0 ? true : false;
            apiElement.hasReturnOptions = apiElement.note.returnOptions.length > 0 ? true : false;
            return apiElement;
          }), function(element) {
            return element === false ? false : true;
          })
        }));

      var i = viewJSON.length;

      while(i --) $('#' + viewJSON[i].id).JSONView(viewJSON[i].json);
    });

  $.ajax({
    url: 'api.json',
    cache: false,
    dataType: 'json',
    method: 'GET'
  }).then(function(data) {
    $('title, .api-document-title').html('API Document Ver: ' + data.apiVersion);
    _apiList = data.apiList;
    
    var catalogOption = [],
        searchKeyword = $.map(_apiList, function(element) {
          if($.inArray(element.catalog, catalogOption) == -1) catalogOption.push(element.catalog);

          return element.name;
        });

    $_main.html(Mustache.render($('#x2b_api_main').html(), {
      apiList: _apiList,
      catalogOption: catalogOption
    }));
    $_main.trigger('apiListRefresh');
    //$('input[name="keyword"]', $_main).typeahead({source: searchKeyword});
    $('select[name="searchApiId"]', $_main).chained('select[name="catalog"]');
  });
  
})(jQuery, window.apiTesterConfig);