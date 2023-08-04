import { Review } from '../../types/review';
import { countRating } from '../card/utils';
import { DateFormat } from '../../const';
import { formatDate } from '../../utils';
import ReviewForm from '../review-form/review-form';

type ReviewsProps = {
  reviews: Review[];
}

function Reviews({reviews}: ReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map(({id, comment, date, rating, user}) => (
          <li key={id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={user.avatarUrl}
                  width={54}
                  height={54}
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">{user.name}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: `${countRating(rating)}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {comment}
              </p>
              <time className="reviews__time" dateTime={formatDate(date, DateFormat.YEAR_MONTH_DAY)}>
                {formatDate(date, DateFormat.MONTH_DAY)}
              </time>
            </div>
          </li>))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default Reviews;
