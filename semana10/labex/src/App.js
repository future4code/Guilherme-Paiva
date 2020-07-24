import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Triste} from './components/1. HomePage/styles'
import HomePage from './components/1. HomePage/HomePage'
import ListTripsPage from './components/2. ListTripPages/ListTripsPage';
import ApplicationFormPage from './components/3. ApplicationFormPage/ApplicationFormPage';
import LoginPage from './components/4. LoginPage/LoginPage'
import NewUserPage from './components/4. LoginPage/NewUserPage'
import TripDetailsPage from './components/5. TripDetailsPage/TripDetailsPage'
import InternalTripsPage from './components/5. TripDetailsPage/InternalTripsPage';
import CreateTripPage from './components/6. CreateTripPage/CreateTripPage';
import BartTriste from './components/Images/05.jpg'

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
           <NewUserPage />
        </Route>
        <Route exact path ="/viagens">
           <InternalTripsPage />
        </Route>
        <Route exact path ="/viagens/detalhes/:viagemId">
           <TripDetailsPage />
        </Route>
        <Route exact path ="/viagens/criar">
           <CreateTripPage />
        </Route>
        <Route path ="/">
         <Triste>
            <h1>Erro 404 - Página não encontrada</h1>
            <img src={BartTriste} alt="Imagem Bart Triste"></img>
         </Triste>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
