import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './style.css'
import {BrowserRouter} from 'react-router-dom'
import UserContext from './context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContext>
    <App />
  </UserContext>
);
