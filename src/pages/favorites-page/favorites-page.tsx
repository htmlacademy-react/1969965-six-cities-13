import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Header from '../../components/header/header';
import { LogoSize } from '../../const';
import Logo from '../../components/logo/logo';
import { PagesClassModifier } from '../../const';

type FavoritesPageProps = {
  offers: Offer[];
}

const cities: string[] = ['Moscow', 'Ryazan', 'Rhodes'];

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {

  return (
    <div className="page">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => <FavoritesList key={city} city = {city} favoriteOffers={offers} />)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo classModifier={PagesClassModifier.FOOTER} size={LogoSize.FOOTER}/>
      </footer>
    </div>
  );
}

export default FavoritesPage;
