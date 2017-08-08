var App = Backbone.Router.extend({
  routes: {
    '': 'home',
    'new': 'addUser'
  },

  home: function() {
    console.log('home');
    var viewTest = new view();
    $('#container').empty().append(viewTest.render().el);
  },

  addUser: function() {
    console.log('addUser');
    var viewTest = new divView();
    $('#container').empty().append(viewTest.render().el);
  },
});

var view = Backbone.View.extend({
  template: _.template($('#view-template').html()),

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

var divView = Backbone.View.extend({
  template: _.template($('#div-template').html()),

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

$(function() {
  new App();
  Backbone.history.start();
});