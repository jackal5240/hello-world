var mySingleton = (function () {
  // Instance stores a reference to the Singleton
  var instance;

  function init() {
    // Singleton
    // Private methods and variables
    function privateMethod(){
        console.log( "I am private" );
    }

    var privateVariable = "Im also private";
    var privateRandomNumber = Math.random();

    return {
      // Public methods and variables
      publicMethod: function () {
        console.log( "The public can see me!" );
        privateMethod();
        return 'end';
      },

      publicProperty: "I am also public",

      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  };

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
  };

})();

var myBadSingleton = (function () {
  // Instance stores a reference to the Singleton
  var instance;

  function init() {
    // Singleton
    var privateRandomNumber = Math.random();
    return {
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  };

  return {
    // Always create a new Singleton instance
    getInstance: function () {
      instance = init();
      return instance;
    }
  };

}) ();

// Usage:

console.log( mySingleton.jf().privateVariable );
console.log( 'mySingleton.getInstance().publicMethod() start' );
console.log( mySingleton.getInstance().publicMethod() ); //more underdefine?
console.log( 'mySingleton.getInstance().publicMethod() end' );
console.log( mySingleton.getInstance().publicProperty );

// var singleA = mySingleton.getInstance();
// var singleB = mySingleton.getInstance();
// console.log( singleA.getRandomNumber() );
// console.log( singleB.getRandomNumber() );
// console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true

// var badSingleA = myBadSingleton.getInstance();
// var badSingleB = myBadSingleton.getInstance();
// console.log( badSingleA.getRandomNumber() );
// console.log( badSingleB.getRandomNumber() );
// console.log( badSingleA.getRandomNumber() !== badSingleB.getRandomNumber() ); // true

// Note: as we are working with random numbers, there is a
// mathematical possibility both numbers will be the same,
// however unlikely. The above example should otherwise still
// be valid.