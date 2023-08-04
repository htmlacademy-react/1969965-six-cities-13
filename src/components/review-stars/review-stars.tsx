import { Fragment, ChangeEvent} from 'react';
import { rating } from '../../const';

type RatingStarsProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  userRate: string;
}

function RatingStars({onChange, userRate}: RatingStarsProps): JSX.Element {

  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(rating).reverse().map(([rate, title]) => (
        <Fragment key={rate}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={rate}
            id={`${rate}-stars`}
            type="radio"
            onChange={onChange}
            checked={userRate === rate}
          />
          <label
            htmlFor={`${rate}-stars`}
            className="reviews__rating-label form__rating-label"
            title={title}
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}

export default RatingStars;
