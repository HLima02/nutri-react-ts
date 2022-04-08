import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './componets/Header';
import Footer from './componets/Footer';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}
