type OfferGoodsProps = {
  goods: string[];
}

function OfferGoods({goods}: OfferGoodsProps): JSX.Element {
  return (
    <ul className="offer__inside-list">
      {goods.map((good) => <li key={good} className="offer__inside-item">{good}</li>)}
    </ul>
  );
}

export default OfferGoods;

