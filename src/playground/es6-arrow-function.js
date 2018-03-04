function square(x) {
  return x * x;
};

console.log(square(3));

// const sqareArrow = (x) => {
// return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

//Using arrow function
const fullName = 'Jahnava Farmer';
let firstName;

// if (fullName) {
//   var firstName = fullName.split('')[0];
//   console.log(firstName);
// }

const getFirstName = (fullName) => {
return fullName.split(' ')[0];
}

//shorthand version of arrow function
const getFirstNameArrow = (fullName) => fullName.split(' ')[0];


console.log(getFirstName(fullName));
console.log(getFirstNameArrow(fullName));
