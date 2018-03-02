console.log('App.js is running!');

var app = {
  title: 'this ia a title',
  subtitle: 'this is a subtitle'
};
var appTemplate = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
    <li>item one</li>
    <li>item two</li>
    </ol>
  </div>
);


// JSX -Javascript XML
var template = (
<div>
  <h1>Indecision App</h1>
  <p>this is some info</p>
  <ol>
    <li>Item one</li>
    <li>Item two</li>
  </ol>
</div>
);

var user = {
  name: 'Jahnava',
  age:28,
  location: 'Florida'
};

var templateTwo = (
  <div>
    <h1> {user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);


var appRoot = document.getElementById('app');
//renders the template information (make sure to use child of main var)
ReactDOM.render(template, appRoot);
