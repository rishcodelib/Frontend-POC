import React from 'react';
import ReactDOM from 'react-dom';
import Headings from './Headings';
import pi, { add, div, mul, sub } from './math'

ReactDOM.render(
  <div>
    <Headings />
    <ul>
      <li> A Calculator Page</li>
      <li>Value of PI =  {pi}</li>
      <li>Addition of 1 and 2  = {add(1, 2)}</li>
      <li>Subtraction of 1 and 2 = {sub(1, 2)}</li>
      <li>Multiplication of 1 and 2 = {mul(1, 2)}</li>
      <li>Division of 1 and 2 = {div(1, 2)}</li>
    </ul>
  </div>,

  document.getElementById('root')
)