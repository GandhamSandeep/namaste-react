
import React from 'react';
import ReactDOM from 'react-dom/client';

// First Hello world program in React
// const heading = React.createElement('h1', {id: 'heading', xyz: 'xyz'}, 'Hello World.!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
// console.log(heading);



//Nested Elemetns
const parent = React.createElement(
  'div',
  {id: 'parent'}, 
  React.createElement(
    'div',
    {id: 'child'},[
      React.createElement('h1',{key: '1'},'This is a React Project'),
      React.createElement('h2',{key: '2'},'second h1 tag')
     ]),
  React.createElement(
    'div',
    {id: 'child2'},[
      React.createElement('h1',{key: '3'},'first h1 tag'),
      React.createElement('h2',{key: '4'},'second h1 tag')
  ])

);
console.log(parent); //Object

const root = ReactDOM.createRoot(document.getElementById('root')).render(parent);

// Output : 
{/* <div id="root">
  <div id="parent">
    <div id="child">
      <h1>first h1 tag</h1>
      <h2>second h1 tag</h2>
    </div>
    <div id="child">
      <h1>first h1 tag</h1>
      <h2>second h1 tag</h2>
    </div>
  </div>
</div> */}