(function (window, $, temp) {
  var Views = temp.Views;
  Views.Data = List;
  List.prototype = {
    init: function() {
      console.log('init');
    }
  };
  var aa = List();
  aa.init();
}) (window, jQuery, CC);