
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
      React.createElement('h1',{},'first h1 tag'),
      React.createElement('h2',{},'second h1 tag')
     ]),
  React.createElement(
    'div',
    {id: 'child'},[
      React.createElement('h1',{},'first h1 tag'),
      React.createElement('h2',{},'second h1 tag')
  ])

);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

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