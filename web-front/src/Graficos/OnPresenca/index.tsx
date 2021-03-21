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

function ModalidadeEnsino({ respostas }: props) {

    const [dado, setDado] = useState<data[]>();

    useEffect(() => {

        let sim: number = 0;
        let nao: number = 0;

        respostas.map(dado => {
            if (dado.h == "Sim") {
                sim++;
            } else {
                nao++;
            }
        });

        let dadosLet: data[] = [];
        dadosLet.push({ x: `Sim - ${sim}`, y: sim });
        dadosLet.push({ x: `Não - ${nao}`, y: nao });

        setDado(dadosLet);
    }, []);

    return (
        <>
            <h1 className="titulo-modalidade">Você sabia que, segundo a ON 01/2021, não se pode contar presenças das aulas síncronas e que a presença é contada pelas atividades entregues? {`(${respostas.length} respostas)`}</h1>
            <div className="table">
                <VictoryPie
                    colorScale={["orange", "navy" ]}
                    data={dado}
                />
            </div>

        </>
    );
}

export default ModalidadeEnsino;