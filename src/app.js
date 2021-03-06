console.log('App.js is running!');

const app = {
  title: 'Indecision app',
  subtitle: 'this is a subtitle',
  options: ['one', 'two']
};
const Template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
    <li>item one</li>
    <li>item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
console.log('addOne');
};

const minusOne = () => {
console.log('minusOne');
};
const reset = () => {
  console.log('reset');
}
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
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
