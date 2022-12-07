import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {Page1} from './Page1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <BrowserRouter>
      <Routes>
          <Route path='' element={<App />} />
          <Route path='page-1/:name/view' element={<Page1 />} />
          <Route path='page-2' element={<div>Page 2</div>} />
          <Route path='*' element={<div>Not Found</div>} />
      </Routes>
   
   </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
