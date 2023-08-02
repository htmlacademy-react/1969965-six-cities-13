export const RATING_PER_STAR = 20;

export enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer',
  Error = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const FavoriteBtnClassModifier = {
  OFFER: 'offer',
  CARD: 'place-card'
};

export const FavoriteBtnSize = {
  OFFER: {
    width: 31,
    height: 33
  },
  CARD: {
    width: 18,
    height: 19
  }
};

