import Card from '../card/card';
import { Offer } from '../../types/offer';
import { useState } from 'react';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps): JSX.Element {

  const [ ,setActiveCard] = useState('');

  function handleMouseLeave() {
    setActiveCard('');
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card onMouseEnter = {() => setActiveCard(offer.id)} onMouseLeave={handleMouseLeave} offer = {offer} key = {offer.id}/>)}
    </div>
  );
}

export default OffersList;

