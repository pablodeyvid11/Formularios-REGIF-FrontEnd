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
        let periodo1: number = 0;
        let periodo2: number = 0;
        let periodo3: number = 0;
        let periodo4: number = 0;
        let periodo5: number = 0;
        let periodo6: number = 0;
        let periodo7: number = 0;
        let periodo8: number = 0;
        let periodo9: number = 0;
        let periodo10: number = 0;
        let periodo11: number = 0;
        let periodo12: number = 0;

        respostas.map(dado => {
            if (dado.periodo == "1º ano/período") {
                periodo1++;
            } else if (dado.periodo == "2º ano/período") {
                periodo2++;
            } else if (dado.periodo == "3º ano/período") {
                periodo3++;
            } else if (dado.periodo == "4º ano/período") {
                periodo4++;
            } else if (dado.periodo == "5º período") {
                periodo5++;
            } else if (dado.periodo == "6º período") {
                periodo6++;
            } else if (dado.periodo == "7º período") {
                periodo7++;
            } else if (dado.periodo == "8º período") {
                periodo8++;
            } else if (dado.periodo == "9º período") {
                periodo9++;
            } else if (dado.periodo == "10º período") {
                periodo10++;
            } else if (dado.periodo == "11º período") {
                periodo11++;
            } else if (dado.periodo == "12º período") {
                periodo12++;
            }
        });

        let dadosLet: data[] = [];

        dadosLet.push({ quarter: `1º ano/período - ${periodo1}`, earnings: periodo1 });
        dadosLet.push({ quarter: `2º ano/período - ${periodo2}`, earnings: periodo2 });
        dadosLet.push({ quarter: `3º ano/período - ${periodo3}`, earnings: periodo3 });
        dadosLet.push({ quarter: `4º ano/período - ${periodo4}`, earnings: periodo4 });

        dadosLet.push({ quarter: `5º período - ${periodo5}`, earnings: periodo5 });
        dadosLet.push({ quarter: `6º período - ${periodo6}`, earnings: periodo6 });
        dadosLet.push({ quarter: `7º período - ${periodo7}`, earnings: periodo7 });
        dadosLet.push({ quarter: `8º período - ${periodo8}`, earnings: periodo8 });
        dadosLet.push({ quarter: `9º período - ${periodo9}`, earnings: periodo9 });
        dadosLet.push({ quarter: `10º período - ${periodo10}`, earnings: periodo10 });
        dadosLet.push({ quarter: `11º período - ${periodo11}`, earnings: periodo11 });
        dadosLet.push({ quarter: `12º período - ${periodo12}`, earnings: periodo12 });

        setDado(dadosLet);
    }, []);

    return (
        <>
            <h1 className="titulo-periodo">Qual ano/período você cursa atualmente no IFRN? {`(${respostas.length} respostas)`} </h1>
            <div className="table">
                <VictoryChart domainPadding={50} width={1500} height={300}
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