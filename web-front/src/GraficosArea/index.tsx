import React from 'react';
import resposta from '../Types/resposta';
import './styles.css';
import ModalidadeEnsino from './../Graficos/ModalidadeEnsino';
import Periodo from './../Graficos/Periodo';
import OnConhecer from './../Graficos/OnConhecer';
import OnAtividade from './../Graficos/OnAtividade';
import OnPresenca from './../Graficos/OnPresenca';
import ProfessorAtividadeSemana from './../Graficos/ProfessorAtividadeSemana';
import ProfessorPrazo from './../Graficos/ProfessorPrazo';
import ProfessorAtividadeGrande from './../Graficos/ProfessorAtividadeGrande';
import ProfessorPresencaSincrona from './../Graficos/ProfessorPresencaSincrona';
import ProfessorCamera from './../Graficos/ProfessorCamera';
import Sobrecarga from './../Graficos/Sobrecarga';
import ConversaProfessorTamanhoAtividades from './../Graficos/ConversaProfessorTamanhoAtividade';
import ConversaProfessorProblemaAnterior from './../Graficos/ConversaProfessorProblemaAnterior';
import ReclamacaoSetor from './../Graficos/ReclamacaoSetor';
import ReclamacaoSetorSolucao from './../Graficos/ReclamacaoSetorSolucao';
import ResolverProblema from './../Graficos/ResolverProblema';

type props = {
    respostas: resposta[];
}

function GraficosArea({ respostas }: props) {
    return (
        <>
            <ModalidadeEnsino respostas={respostas} key={respostas.length + 1}></ModalidadeEnsino>
            <Periodo respostas={respostas} key={respostas.length + 2}></Periodo>
            <OnConhecer respostas={respostas} key={respostas.length + 3}></OnConhecer>
            <OnAtividade respostas={respostas} key={respostas.length + 4}></OnAtividade>
            <OnPresenca respostas={respostas} key={respostas.length + 5}></OnPresenca>
            <ProfessorAtividadeSemana respostas={respostas} key={respostas.length + 6}></ProfessorAtividadeSemana>
            <ProfessorPrazo respostas={respostas} key={respostas.length + 7}></ProfessorPrazo>
            <ProfessorAtividadeGrande respostas={respostas} key={respostas.length + 8}></ProfessorAtividadeGrande>
            <ProfessorPresencaSincrona respostas={respostas} key={respostas.length + 9}></ProfessorPresencaSincrona>
            <ProfessorCamera respostas={respostas} key={respostas.length + 10}></ProfessorCamera>
            <Sobrecarga respostas={respostas} key={respostas.length + 11}></Sobrecarga>
            <ConversaProfessorTamanhoAtividades respostas={respostas} key={respostas.length + 12}></ConversaProfessorTamanhoAtividades>
            <ConversaProfessorProblemaAnterior respostas={respostas} key={respostas.length + 13}></ConversaProfessorProblemaAnterior>
            <ReclamacaoSetor respostas={respostas} key={respostas.length + 14}></ReclamacaoSetor>
            <ReclamacaoSetorSolucao respostas={respostas} key={respostas.length + 15}></ReclamacaoSetorSolucao>
            <ResolverProblema respostas={respostas} key={respostas.length + 16}></ResolverProblema>
        </>
    );
}

export default GraficosArea;