import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import './pages/404-page/404-page.css';
import { Setting } from './const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App proposals = {Setting.Proposals}/>
  </React.StrictMode>
);
