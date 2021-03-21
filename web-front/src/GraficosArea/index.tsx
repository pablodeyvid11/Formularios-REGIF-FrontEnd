import React from 'react';
import resposta from '../Types/resposta';
import './styles.css';
import ModalidadeEnsino from './../Graficos/ModalidadeEnsino';

type props = {
    respostas: resposta[];
}

function GraficosArea({ respostas }: props) {
    return (
        <>
            <ModalidadeEnsino respostas={respostas} key={respostas.length}></ModalidadeEnsino>
        </>
    );
}

export default GraficosArea;