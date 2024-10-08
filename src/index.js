// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // import stylesheet from '../public/stylesheet.css'
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   <BrowserRouter>

//     <App />
//   </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { store } from './redux/store';
import { Provider } from 'react-redux';

import App from "./App";

ReactDOM.render(
<BrowserRouter>
<Provider store={store}>

    <App />
  </Provider>,
 </BrowserRouter>,
  document.getElementById("root")
);