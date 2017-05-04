require(['page/firstFeature'], function(test) {
  console.log(test);
  test.Methods.doSomething();
  test.aa.haha();
  test.initialize('initialize')
    .then(function(result) {
      console.log(result);
      console.log('initialize done');
    })
    .fail(function(error) {
      console.log(error);
      console.log('initialize error');
    });
});