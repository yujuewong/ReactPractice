'use strict';

console.log('App.js is running!');

// JSX = JavaScript XML
var templete = React.createElement(
  'p',
  null,
  'This is JSX from app.js!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
