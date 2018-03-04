var nameVar = 'Jahnava';
var nameVar = 'Scott';
console.log('nameVar', nameVar);

let nameLet = 'Ganesh';
nameLet = 'Jaya';
console.log('nameLet', nameLet);

const nameConst = 'Nana';
console.log('nameConst', nameConst);

//Block scoping

const fullName = 'Jahnava Farmer';
let firstName;

if (fullName) {
  var firstName = fullName.split('')[0];
  console.log(firstName);
}

console.log(firstName);
