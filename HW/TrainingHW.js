(function(){
  $('#container').html(Mustache.render($('#template').html(), {name: "Luke"}));
})();

