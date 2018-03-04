// arrguments object - no longer bound with arrow functions

const add = function (a, b) {
  return a + b;
};
console.log(add(55, 1, 1001));

//this keyword - no longer bound

const user = {
  name: 'Jahnava',
  cities: ['Gainesville', 'Ninoli', 'Roanoke'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' flew like super woman to ' + city);
  }
    };
    console.log(user.printPlacesLived());

    //challenge

    const multiplier = {
      numbers: [10, 20, 30],
      multiplyBy: 3,
      multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
      }
    };

    console.log(multiplier.multiply());
