import React from 'react';
import axios from 'axios';

const API_URL = 'https://respostas-formulario.herokuapp.com';

export async function getRespostas() {
    return (await axios(`${API_URL}/respostas`)).data;
}

export async function getRespostasByCampus(campus: string) {
    return (await axios(`${API_URL}/respostas/${campus}`)).data;
}