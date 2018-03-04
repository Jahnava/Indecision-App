// arrguments object - no longer bound with arrow functions

const add = function (a, b) {
  return a + b;
};
console.log(add(55, 1, 1001));

//this keyword - no longer bound

const user = {
  name: 'Jahnava',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived: function () {
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  }
};
user.printPlacesLived();
