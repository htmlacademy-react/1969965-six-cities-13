import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { Setting } from './const.ts';
import { offers } from './mocks/offers.ts';
import { comments } from './mocks/comments.ts';
import { detailedOffers } from './mocks/detailed-offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      proposals = {Setting.Proposals}
      offers = {offers}
      detailedOffers = {detailedOffers}
      comments = {comments}
    />
  </React.StrictMode>
);
