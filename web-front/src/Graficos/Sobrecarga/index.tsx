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

        let SimMuito: number = 0;
        let SimPouco: number = 0;
        let Nao: number = 0;

        respostas.map(dado => {
            if (dado.n == "Sim, muito.") {
                SimMuito++;
            } else if (dado.n == "Sim, um pouco.") {
                SimPouco++;
            } else if (dado.n == "Não.") {
                Nao++;
            }
        });

        let dadosLet: data[] = [];
        dadosLet.push({ x: `Sim, muito. - ${SimMuito}`, y: SimMuito });
        dadosLet.push({ x: `Sim, pouco - ${SimPouco}`, y: SimPouco });
        dadosLet.push({ x: `Não. - ${Nao}`, y: Nao });

        setDado(dadosLet);
    }, []);

    return (
        <>
            <h1 className="titulo-modalidade">Você frequentemente se sente sobrecarregado com o número de atividades do ensino remoto? {`(${respostas.length} respostas)`}</h1>
            <div className="table">
                <VictoryPie
                    colorScale={["orange", "cyan", "navy"]}
                    data={dado}
                />
            </div>

        </>
    );
}

export default ModalidadeEnsino;