
import React from 'react';
import { Expression } from './example/expression.jsx';
import { Attribute } from './example/attribute.jsx';

import { createRoot } from 'react-dom/client';


function Button() {
  return (
    <>
      <button>Click Me</button>
    </>
  );
}

export function Examples() {
  const example1 = <h1>EXAMPLE 1: I Love JSX!</h1>;
  const example2 = React.createElement('h1', {}, ' Example 2: I do not use JSX!');
  const example3 = <h1>React is {5 + 5} times better with JSX</h1>;
  const example4 = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
  );
  const example5 = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);

  return (
    <>
      {example1}
      {example2}
      {example3}
      {example4}
      {example5}
    </>
  );
}


function App() {
  const myElement = <h5>Hello World</h5>;
  const myElement1 = <h5>The result of 5 + 5 is {5 + 5}</h5>;
  const name = "Precious";
  const age = 21;

  
  return (
    <>
      {myElement}
      {myElement1}
      <h5>Hello, {name}</h5>
      <h5>You are {age} years old</h5>
      <Button />
      <Examples/>
      <Expression />
      <Attribute/>
    </>
  );
}


export default App;