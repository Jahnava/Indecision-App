console.log('App.js is running!');




var app = {
  title: 'this is a title',
  subtitle: 'this is a subtitle',
  options: ['one', 'two']
};
var appTemplate = (
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
function getLocation(location) {
  if (location) {
    return <p>location: {location}</p>
  }
}
var templateTwo = (
  <div>
    <h1> {user.name ? user.name : 'Anonymous'}</h1>
    {(user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);


var appRoot = document.getElementById('app');
//renders the template information (make sure to use child of main var)
ReactDOM.render(appTemplate, appRoot);
