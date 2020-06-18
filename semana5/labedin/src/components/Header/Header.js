import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <div className="page-header">
            <h1>{props.nome}</h1>
            <img src={ props.imagem } />
        </div>
    )
}

export default Header;