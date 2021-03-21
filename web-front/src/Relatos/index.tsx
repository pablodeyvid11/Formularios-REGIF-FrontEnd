import React from 'react';
import resposta from '../Types/resposta';
import Relato from './Relato';
import './styles.css';

type props = {
    respostas: resposta[];
}

function Relatos({ respostas }: props) {
    respostas.sort((a, b) => {
        if (a.t.length < b.t.length) {
            return 1;
        } else if (a.t.length > b.t.length) {
            return -1;
        } else {
            return 0;
        }
    });

    return (
        <>
            <h1 className="titulo-modalidade">Você, sua turma ou algum amigo/conhecido do seu câmpus enfrentaram algum outro problema não tratado neste questionário? Caso sim, poderia detalhá-lo?</h1>
            <br />
            {respostas.map(resposta => {
                return (
                    <Relato texto={resposta.t} key={resposta.id}></Relato>
                );
            })}
        </>
    );
}

export default Relatos;