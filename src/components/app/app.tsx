import MainPage from '../../pages/main-page/main-page.tsx';

type AppScreenProps = {
  proposals: number;
}

function App({proposals}: AppScreenProps): JSX.Element {
  return <MainPage proposals = {proposals}/>;
}

export default App;
