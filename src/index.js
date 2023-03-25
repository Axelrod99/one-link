import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from './components/Signin';
import Login from './components/Login';
import Dashpage from './components/dashboard';
import TheProfile from './components/profile';
import AppContextProvider from './context';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


ReactDOM.render(
  <AppContextProvider>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Dashpage' element={<Dashpage />} />
        <Route path='/Profile' element={<TheProfile />} />
      </Routes>
    </Router>
  </AppContextProvider>,

  document.getElementById('root')
)
