import { getFavoriteStyles } from './favorite-btn-utils';

type AddToFavoriteButtonProps = {
  isFavorite: boolean;
  classModifier: string;
  size: {
    width: number;
    height: number;
  };
}

function AddToFavoriteButton({isFavorite, classModifier, size}: AddToFavoriteButtonProps): JSX.Element {
  const {width, height} = size;

  return (
    <button className={`${classModifier}__bookmark-button button`} type="button">
      <svg className={`${classModifier}__bookmark-icon`} width={width} height={height} style={getFavoriteStyles(isFavorite)}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default AddToFavoriteButton;
