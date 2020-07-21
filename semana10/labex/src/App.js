import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'
import ApplicationFormPage from './components/ApplicationFormPage/ApplicationFormPage';
import LoginPage from './components/LoginPage/LoginPage'
import ListTripsPage from './components/ListTripPages/ListTripsPage';
import CreateTripPage from './components/CreateTripPage/CreateTripPage';
import TripDetailsPage from './components/TripDetailsPage/TripDetailsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/">
          <HomePage />
        </Route>
        <Route exact path ="/inscricao">
           <ApplicationFormPage />
        </Route>
        <Route exact path ="/login">
           <LoginPage />
        </Route>
        <Route exact path ="/viagens/lista">
           <ListTripsPage />
        </Route>
        <Route exact path ="/viagens/criar">
           <CreateTripPage />
        </Route>
        <Route exact path ="/viagens/detalhes">
           <TripDetailsPage />
        </Route>
        <Route path ="/">
           <h1>Erro 404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
