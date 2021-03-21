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

        let SimUm: number = 0;
        let SimAlguns: number = 0;
        let SimVarios: number = 0;
        let Nao: number = 0;

        respostas.map(dado => {
            if (dado.i == "Sim, tenho um(a).") {
                SimUm++;
            } else if (dado.i == "Sim, tenho alguns.") {
                SimAlguns++;
            } else if (dado.i == "Sim, tenho vários.") {
                SimVarios++;
            } else if (dado.i == "Não, não tenho.") {
                Nao++;
            }
        });

        let dadosLet: data[] = [];
        dadosLet.push({ x: `Sim, um(a). - ${SimUm}`, y: SimUm });
        dadosLet.push({ x: `Sim, alguns. - ${SimAlguns}`, y: SimAlguns });
        dadosLet.push({ x: `Sim, vários. - ${SimVarios}`, y: SimVarios });
        dadosLet.push({ x: `Não. - ${Nao}`, y: Nao });

        setDado(dadosLet);
    }, []);

    return (
        <>
            <h1 className="titulo-modalidade">Você tem professores que passam mais do que uma atividade por semana? {`(${respostas.length} respostas)`}</h1>
            <div className="table">
                <VictoryPie
                    colorScale={["orange", "gold", "cyan", "navy"]}
                    data={dado}
                />
            </div>

        </>
    );
}

export default ModalidadeEnsino;