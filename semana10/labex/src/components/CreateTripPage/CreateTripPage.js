import React from 'react';
import {useHistory} from 'react-router-dom';

const CreateTripPage = () => {
    const history = useHistory();

    const goToListTripsPage = () => {
        history.push("/viagens/lista")
    }

return (
    <div>
        <h1>Create Trip</h1>
        <button onClick={goToListTripsPage}>Lista de Viagens</button>
    </div>
    )
}

export default CreateTripPage;