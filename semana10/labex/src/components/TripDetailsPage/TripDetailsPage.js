import React from 'react';
import {useHistory} from 'react-router-dom';

const TripDetailsPage = () => {
    const history = useHistory();

    const goToCreateTripPage = () => {
        history.push("/viagens/criar")
    }

return (
    <div>
        <h1>Trip Details</h1>
        <p>Detalhes Viagem 1</p>
        <p>Detalhes Viagem 2</p>
        <p>Detalhes Viagem 3</p>
        <button onClick={goToCreateTripPage}>Criar Nova Viagem</button>
        <button>Logout</button>
    </div>
    )
}

export default TripDetailsPage;