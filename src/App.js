import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Copyright from './pages/Copyright';
import Home from './pages/Home';
import Impressum from './pages/Impressum';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/impressum' component={Impressum} />
        <Route path='/copyright' component={Copyright} />
      </Switch>
    </>
  );
}

export default App;
