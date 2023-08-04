import { turnFirstCharToUppercase } from '../../pages/offer-page/utils';

type OfferFeaturesProps = {
  type: string;
  maxAdults: number;
  bedrooms: number;
}

function OfferFeatures({type, maxAdults, bedrooms}: OfferFeaturesProps): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">{turnFirstCharToUppercase(type)}</li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
              Max {maxAdults} adults
      </li>
    </ul>
  );
}

export default OfferFeatures;

