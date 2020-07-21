import React from 'react';
import {useHistory} from 'react-router-dom';

const TripDetailsPage = () => {
    const history = useHistory();

    const goToListTripsPage = () => {
        history.push("/viagens/lista")
    }

return (
    <div>
        <h1>Trip Details</h1>
        <button onClick={goToListTripsPage}>Lista de Viagens</button>
    </div>
    )
}

export default TripDetailsPage;