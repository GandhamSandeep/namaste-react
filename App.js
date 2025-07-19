import React from 'react';
import ReactDOM from 'react-dom/client';


const Title = ()=> ( 
  <h1>React using JSX</h1>
);

const HeadingComponent = ()=>(
  <div id="contianer">
    <Title />
    <h1 className="heading">Sandeep is here..!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);
