import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'
import ApplicationFormPage from './components/ApplicationFormPage/ApplicationFormPage';
import LoginPage from './components/LoginPage/LoginPage'
import ListTripsPage from './components/ListTripPages/ListTripsPage';
import CreateTripPage from './components/CreateTripPage/CreateTripPage';
import TripDetailsPage from './components/TripDetailsPage/TripDetailsPage'
import NewUsuario from './components/LoginPage/NewUsuario'
import TripsLista from './components/TripDetailsPage/TripsLista';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/">
          <HomePage />
        </Route>
        <Route exact path ="/listadeviagens">
           <ListTripsPage />
        </Route>
        <Route exact path ="/inscricao">
           <ApplicationFormPage />
        </Route>
        <Route exact path ="/login">
           <LoginPage />
        </Route>
        <Route exact path ="/login/criar">
           <NewUsuario />
        </Route>
        <Route exact path ="/viagens">
           <TripsLista />
        </Route>
        <Route exact path ="/viagens/detalhes/:viagemId">
           <TripDetailsPage />
        </Route>
        <Route exact path ="/viagens/criar">
           <CreateTripPage />
        </Route>
        <Route path ="/">
           <h1>Erro 404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
