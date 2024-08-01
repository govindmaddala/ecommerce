import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import UserProvider from './Data/Contexts/UserContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>,
)
