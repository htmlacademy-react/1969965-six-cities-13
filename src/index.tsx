import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { offers } from './mocks/offers.ts';
import { reviews } from './mocks/reviews.ts';
import { detailedOffers } from './mocks/detailed-offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers = {offers}
      detailedOffers = {detailedOffers}
      reviews = {reviews}
    />
  </React.StrictMode>
);
