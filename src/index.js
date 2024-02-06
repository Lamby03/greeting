import React from 'react';
import ReactDOM from 'react-dom';
import lamby,{prog, myName, mySname} from './App';

ReactDOM.render(
  <>
    <ol>
      <li> Lamby</li>
      <li> {lamby} </li>
      <li> {prog} </li>
      <li> {myName()} </li>
      <li> {mySname()} </li>
    </ol>
  </>,
      document.getElementById("root")
);

