import React from 'react';
import './styles.css';

type props = {
    texto: string;
}

function Relato({ texto }: props) {


    return (
        <>
            <div className="area-relato">
                <span className="texto">{texto}</span>
            </div>
        </>
    );
}

export default Relato;