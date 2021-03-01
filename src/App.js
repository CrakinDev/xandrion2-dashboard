import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { GuardianDashboardPage, LandingPage, RegisterPage, SearchPage } from './pages'

function App() {
  return (
    <Switch>
      <Route path='/' exact={true} component={ LandingPage } />
      <Route path='/search' exact={true} component={ SearchPage } />
      <Route path='/dashboard/:bungieAcct' exact={true} component={ GuardianDashboardPage } />
      <Route path='/register/:discordId' exact={true} component={ RegisterPage } />
    </Switch>
  );
}

export default App;
