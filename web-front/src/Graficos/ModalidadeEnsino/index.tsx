import React, { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import resposta from '../../Types/resposta';
import './styles.css';

type props = {
    respostas: resposta[];
}

type data = {
    quarter: string;
    earnings: number;
}

function ModalidadeEnsino({ respostas }: props) {

    const [dado, setDado] = useState<data[]>();

    useEffect(() => {
        let Integrado: number = 0;
        let IntegradoEJA: number = 0;
        let Subsequente: number = 0;
        let Graduacao: number = 0;
        let PosGraduacao: number = 0;
        let Mestrado: number = 0;

        respostas.map(dado => {
            if (dado.modalidade == "Integrado") {
                Integrado++;
            } else if (dado.modalidade == "Integrado EJA") {
                IntegradoEJA++;
            } else if (dado.modalidade == "Subsequente") {
                Subsequente++;
            } else if (dado.modalidade == "Graduação") {
                Graduacao++;
            } else if (dado.modalidade == "Pós-Graduação") {
                PosGraduacao++;
            } else if (dado.modalidade == "Mestrado") {
                Mestrado++;
            }
        });

        let dadosLet: data[] = [];
        dadosLet.push({ quarter: `Integrado - ${Integrado}`, earnings: Integrado });
        dadosLet.push({ quarter: `Integrado EJA - ${IntegradoEJA}`, earnings: IntegradoEJA });
        dadosLet.push({ quarter: `Subsequente - ${Subsequente}`, earnings: Subsequente });
        dadosLet.push({ quarter: `Graduação - ${Graduacao}`, earnings: Graduacao });
        dadosLet.push({ quarter: `Pós-Graduação - ${PosGraduacao}`, earnings: PosGraduacao });
        dadosLet.push({ quarter: `Mestrado - ${Mestrado}`, earnings: Mestrado });
        setDado(dadosLet);
    }, []);

    return (
        <>
        <h1 className="titulo-modalidade">Qual a sua modalidade de ensino? {`(${respostas.length} respostas)`}</h1>
            <div className="table">
                <VictoryChart domainPadding={50} width={1000} height={500}
                    theme={VictoryTheme.material}
                >
                    <VictoryBar height={550} width={550}
                        barWidth={50}
                        data={dado}
                        x="quarter"
                        y="earnings"
                    />
                </VictoryChart>
            </div>

        </>
    );
}

export default ModalidadeEnsino;