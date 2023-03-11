import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signin from './components/layout/Signin';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


ReactDOM.render(
  <Router>
   <Routes>
    <Route path='/' element={<App/>}/> 
    <Route path='/Signin' element={<Signin/>}/>
   </Routes>
  </Router>,

document.getElementById('root')
)
