import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/categoria'
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      {/* exact => componente funciona se for exatemnete o path definido */}
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component= {Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
