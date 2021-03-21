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
            if (dado.o == "Sim, ele/a entendeu e diminuiu o número e o tamanho das atividades.") {
                SimEntendeuDiminuiu++;
            } else if (dado.o == "Sim, mas ele/a não diminuiu o número e o tamanho das atividades.") {
                SimNaoDiminuiu++;
            } else if (dado.o == "Não que eu saiba.") {
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
            <h1 className="titulo-modalidade">Você ou alguém de sua turma tentou conversar com o(s) professor(es) para que diminuíssem o número e o tamanho de atividades? {`(${quantidade} respostas)`}</h1>
            <div className="table">
                <VictoryPie
                    colorScale={["orange", "cyan", "navy"]}
                    data={dado}
                />
            </div>

            <div className="legenda">
                <div>
                    <span id="azul">•</span> Sim, ele/a entendeu e diminuiu o número e o tamanho das atividades.
                    <br/>
                    <span id="laranja">•</span> Sim, mas ele/a não diminuiu o número e o tamanho das atividades.
                    <br/>
                    <span id="ciano">•</span> Não que eu saiba.
                </div>
            </div>

        </>
    );
}

export default ModalidadeEnsino;