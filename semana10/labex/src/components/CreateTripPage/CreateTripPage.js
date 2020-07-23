import React from 'react';
import {useHistory} from 'react-router-dom';

const CreateTripPage = () => {
    const history = useHistory();

    const goToTripDetailsPage = () => {
        history.push("/viagens/detalhes")
    }

return (
    <div>
        <h1>Create Trip</h1>
        <label>Infos trip</label>
        <input />
        <button>Criar</button>
        <button onClick={goToTripDetailsPage}>Check trip details</button>
        <button>Logout</button>
    </div>
    )
}

export default CreateTripPage;