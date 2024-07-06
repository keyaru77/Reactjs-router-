import { Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home';

import './styles/global.scss'
import { Anime } from './pages/Anime/Slug';
import { PageNotFound } from './pages/PageNotFound';
import { Animes } from './pages/Animes/title';

function App() {
  
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/anime/:slug" component={ Anime }/>
      <Route path="/animes/:title" component={ Animes }/>
      <Route path="/404" component={ PageNotFound }/>
    </BrowserRouter>
  );
}

export default App;
