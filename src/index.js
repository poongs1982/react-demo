 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import {BrowserRouter} from 'react-router-dom';
 //import ReactDOM from 'react-dom';

import Display from './components/Display';
import Counter from './components/counter';
import ListColors from './components/listColors';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const element1 = <h1>Hello Everyone!</h1>
// const element11 = React.createElement("h1", null, "Hello Everyone!");
// const element2 = <h2>Welcome to the training!!</h2>
// const element21 = React.createElement("h2", null, "Welcome to the training!!");

// console.log(element11);
// console.log(element21);

//   // const root = ReactDOM.createRoot(document.getElementById("root"));
//   // root.render(<Display></Display>);

// ReactDOM.render(<ListColors></ListColors>, document.getElementById("root"));
