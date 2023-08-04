import { Offer } from '../../types/offer';
import FavoritesCard from '../favorite-card/favorite-card';

type FavoritesListProps = {
  favoriteOffers: Offer[];
  city: string;
}

function FavoritesList({city, favoriteOffers}: FavoritesListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffers.map((offer) => <FavoritesCard offer = {offer} key = {offer.id}/>)}
      </div>
    </li>
  );
}

export default FavoritesList;
