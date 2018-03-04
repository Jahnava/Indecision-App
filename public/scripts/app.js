'use strict';

// arrguments object - no longer bound with arrow functions

var add = function add(a, b) {
  return a + b;
};
console.log(add(55, 1, 1001));

//this keyword - no longer bound

var user = {
  name: 'Jahnava',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    this.cities.forEach(function (city) {
      console.log(_this.name + ' has lived in ' + city);
    });
  }
};
user.printPlacesLived();
