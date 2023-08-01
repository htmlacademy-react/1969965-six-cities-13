import { RATING_PER_STAR } from '../../const';

export function countRating(offerRating: number): number {
  return RATING_PER_STAR * offerRating;
}
