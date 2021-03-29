import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/header';
import Main from './pages/Main';
import Food from './pages/Food';
import Tour from './pages/Tour';
import Shopping from './pages/Shopping';
import ScrollToTop from './index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <ScrollToTop />
          <Main />
        </Route>
        <Route exact path='/food'>
          <ScrollToTop />
          <Food />
        </Route>
        <Route exact path='/tourism'>
          <ScrollToTop />
          <Tour />
        </Route>
        <Route exact path='/shopping'>
          <ScrollToTop />
          <Shopping />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;