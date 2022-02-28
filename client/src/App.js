import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import MainPage from './components/mainPage/MainPage';
import History from './components/historyPage/History';
import Kontakt from './components/kontaktPage/Kontakt.js';

const App = () => (
  <BrowserRouter>

      <Navbar />
      <Switch>
      <Route path="/" exact component={MainPage} />
        <Route path="/home" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/about" exact component={History} />
        <Route path="/kontakt" exact component={Kontakt} />
      </Switch>
 
  </BrowserRouter>
);

export default App;
