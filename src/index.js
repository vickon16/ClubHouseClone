import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './App';
import UserProdiver from "./context"

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <UserProdiver>
      <App />
    </UserProdiver>
  </React.StrictMode>
);