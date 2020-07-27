import React from 'react';
import ReactDOM from 'react-dom';
//  import './index.css';
import Home2 from './Whole/Home2';
// import Admin1 from './Admin/Admin1';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 
 <React.StrictMode>
 
 {/* <Sallot/> */}
 {/* <Admin1/> */}
<Home2/>
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();