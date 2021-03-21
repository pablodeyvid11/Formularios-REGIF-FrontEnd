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
        let Nao: number = 0;

        respostas.map(dado => {
            if (dado.q == "Sim, à Diretoria-geral.") {
                dg++;
            } else if (dado.q == "Sim, à Diretoria Acadêmica/de Ensino") {
                da++;
            } else if (dado.q == "Sim, à Diretoria/Coordenação de Curso.") {
                dcc++;
            } else if (dado.q == "Sim, à Equipe Técnico-Pedagógica (Pedagogia).") {
                etep++;
            } else if (dado.q == "Não, não que eu saiba.") {
                Nao++;
            }
        });

        let dadosLet: data[] = [];
        dadosLet.push({ x: `${dg}`, y: dg });
        dadosLet.push({ x: `${dg}`, y: dg });
        dadosLet.push({ x: `${dg}`, y: dcc });
        dadosLet.push({ x: `${dg}`, y: etep });
        dadosLet.push({ x: `${Nao}`, y: Nao });

        quantidade = dg + da + dcc + etep + Nao;

        setDado(dadosLet);
    }, []);

    return (
        <>
            <h1 className="titulo-modalidade">Você ou sua turma reclamaram à Equipe Técnico-Pedagógica ou a algum setor do seu câmpus quanto ao excesso de atividades? {`(${quantidade} respostas)`}</h1>
            <div className="table">
                <VictoryPie
                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                    data={dado}
                />
            </div>

            <div className="legenda">
                <div>
                    <span id="salmao">•</span> Sim, à Diretoria-geral.
                    <br />
                    <span id="laranja">•</span> Sim, à Diretoria Acadêmica/de Ensino
                    <br />
                    <span id="ouro">•</span> Sim, à Diretoria/Coordenação de Curso.
                    <br />
                    <span id="ciano">•</span> Sim, à Equipe Técnico-Pedagógica (Pedagogia).
                    <br />
                    <span id="azul-escuro">•</span> Não, não que eu saiba.
                </div>
            </div>

        </>
    );
}

export default ModalidadeEnsino;