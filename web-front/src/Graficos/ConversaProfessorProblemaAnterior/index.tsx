import React, { useEffect, useState } from 'react';
import { VictoryPie } from 'victory';
import resposta from '../../Types/resposta';
import './styles.css';

type props = {
    respostas: resposta[];
}

type data = {
    x: string;
    y: number;
}

let quantidade = 0;

function ModalidadeEnsino({ respostas }: props) {

    const [dado, setDado] = useState<data[]>();

    useEffect(() => {

        let SimEntendeuDiminuiu: number = 0;
        let SimNaoDiminuiu: number = 0;
        let Nao: number = 0;

        respostas.map(dado => {
            if (dado.p == "Sim, ele/a entendeu e não continuou") {
                SimEntendeuDiminuiu++;
            } else if (dado.p == "Sim, mas ele/a não deixou de apresentar esses problemas.") {
                SimNaoDiminuiu++;
            } else if (dado.p == "Não que eu saiba.") {
                Nao++;
            }
        });

        let dadosLet: data[] = [];
        dadosLet.push({ x: `${SimEntendeuDiminuiu}`, y: SimEntendeuDiminuiu });
        dadosLet.push({ x: `${SimNaoDiminuiu}`, y: SimNaoDiminuiu });
        dadosLet.push({ x: `${Nao}`, y: Nao });
        quantidade = SimEntendeuDiminuiu + SimNaoDiminuiu + Nao;
        setDado(dadosLet);
    }, []);

    return (
        <>
            <h1 className="titulo-modalidade">Você ou alguém de sua turma tentou conversar com o(s) professor(es) deixassem de apresentar os problemas citados anteriormente? {`(${quantidade} respostas)`}</h1>
            <div className="table">
                <VictoryPie
                    colorScale={["orange", "cyan", "navy"]}
                    data={dado}
                />
            </div>

            <div className="legenda">
                <div>
                    <span id="azul">•</span> Sim, ele/a entendeu e não continuou
                    <br/>
                    <span id="laranja">•</span> Sim, mas ele/a não deixou de apresentar esses problemas.
                    <br/>
                    <span id="ciano">•</span> Não que eu saiba.
                </div>
            </div>

        </>
    );
}

export default ModalidadeEnsino;