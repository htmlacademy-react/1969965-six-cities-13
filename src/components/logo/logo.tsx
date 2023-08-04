import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  classModifier: string;
  size: {
    width: number;
    height: number;
  };
}

function Logo({classModifier, size}: LogoProps): JSX.Element {
  const {width, height} = size;

  return (
    <Link className={`${classModifier}__logo-link`} to={AppRoute.Root}>
      <img
        className={`${classModifier}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;

