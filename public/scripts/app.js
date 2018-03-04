'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision app',
  subtitle: 'this is a subtitle',
  options: ['one', 'two']
};
var Template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'item one'
    ),
    React.createElement(
      'li',
      null,
      'item two'
    )
  )
);

var count = 0;
var addOne = function addOne() {
  console.log('addOne');
};

var minusOne = function minusOne() {
  console.log('minusOne');
};
var reset = function reset() {
  console.log('reset');
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);

console.log(templateTwo);

// JSX -Javascript XML
// const template = (
// <div>
//   <h1>Indecision App</h1>
//   <p>this is some info</p>
//   <ol>
//     <li>Item one</li>
//     <li>Item two</li>
//   </ol>
// </div>
// );
//
// const user = {
//   name: 'Jahnava',
//   age:28,
//   location: 'Florida'
// };
// function getLocation(location) {
//   if (location) {
//     return <p>location: {location}</p>
//   }
// }
// const templateTwo = (
//   <div>
//     <h1> {user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );


var appRoot = document.getElementById('app');
//renders the template information (make sure to use child of main var)
ReactDOM.render(templateTwo, appRoot);
