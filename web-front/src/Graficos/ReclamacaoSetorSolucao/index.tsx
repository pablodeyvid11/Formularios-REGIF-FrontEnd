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

        let dg: number = 0;
        let da: number = 0;
        let dcc: number = 0;
        let etep: number = 0;
        let outro: number = 0;
        let Nao: number = 0;

        respostas.map(dado => {
            if (dado.r == "Sim, pela Diretoria-geral.") {
                dg++;
            } else if (dado.r == "Sim, pela Diretoria Acadêmica/de Ensino") {
                da++;
            } else if (dado.r == "Sim, pela Diretoria/Coordenação de Curso.") {
                dcc++;
            } else if (dado.r == "Sim, pela Equipe Técnico-Pedagógica (Pedagogia).") {
                etep++;
            } else if (dado.r == "Sim, por um ou mais setores.") {
                outro++;
            } else if (dado.r == "Não, não foi.") {
                Nao++;
            }
        });

        let dadosLet: data[] = [];
        dadosLet.push({ x: `${dg}`, y: dg });
        dadosLet.push({ x: `${dg}`, y: dg });
        dadosLet.push({ x: `${dg}`, y: dcc });
        dadosLet.push({ x: `${dg}`, y: etep });
        dadosLet.push({ x: `${outro}`, y: outro });
        dadosLet.push({ x: `${Nao}`, y: Nao });

        quantidade = dg + da + dcc + etep + outro + Nao;

        setDado(dadosLet);
    }, []);

    return (
        <>
            <h1 className="titulo-modalidade">Considerando a resposta da pergunta anterior, alguma ação foi tomada para resolver o problema da sua turma? {`(${quantidade} respostas)`}</h1>
            <div className="table">
                <VictoryPie
                    colorScale={["tomato", "orange", "gold", "cyan", "green" ,"navy"]}
                    data={dado}
                />
            </div>

            <div className="legenda">
                <div>
                    <span id="salmao">•</span> Sim, pela Diretoria-geral.
                    <br />
                    <span id="laranja">•</span> Sim, pela Diretoria Acadêmica/de Ensino
                    <br />
                    <span id="ouro">•</span> Sim, pela Diretoria/Coordenação de Curso.
                    <br />
                    <span id="ciano">•</span> Sim, pela Equipe Técnico-Pedagógica (Pedagogia).
                    <br />
                    <span id="verde">•</span> Sim, por um ou mais setores.
                    <br />
                    <span id="azul-escuro">•</span> Não, não foi.
                </div>
            </div>

        </>
    );
}

export default ModalidadeEnsino;