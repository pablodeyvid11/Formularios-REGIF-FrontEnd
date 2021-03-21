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

         let sim1 : number = 0; 
         let sim2 : number = 0; 
         let sim3 : number = 0; 
         let sim4 : number = 0; 
         let Nao : number = 0;

        respostas.map(dado => {
            if (dado.s == "Sim, não tive mais problemas com excesso de atividades.") {
                sim1++;
            } else if (dado.s == "Sim, mas apenas um(a) dos professores que reclamamos para o setor deixou apresentar os problemas reclamados.") {
                sim2++;
            } else if (dado.s == "Sim, por um tempo, depois voltou a repetir os problemas reclamados.") {
                sim3++;
            } else if (dado.s == "Sim, o número de atividades diminuiu, mas não para uma por semana como diz a Orientação Normativa.") {
                sim4++;
            } else if (dado.s == "Não, não resolveu o problema.") {
                Nao++;
            }
        });

        let dadosLet: data[] = [];
        dadosLet.push({ x: `${sim1}`, y: sim1 });
        dadosLet.push({ x: `${sim2}`, y: sim2 });
        dadosLet.push({ x: `${sim3}`, y: sim3 });
        dadosLet.push({ x: `${sim4}`, y: sim4 });
        dadosLet.push({ x: `${Nao}`, y: Nao });

        quantidade = sim1 + sim2 + sim3 + sim4 + Nao;

        setDado(dadosLet);
    }, []);

    return (
        <>
            <h1 className="titulo-modalidade">Considerando a resposta da pergunta anterior, a ação tomada para resolveu o problema da sua turma? Se sim, pontualmente ou de maneira ampla? {`(${quantidade} respostas)`}</h1>
            <div className="table">
                <VictoryPie
                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                    data={dado}
                />
            </div>

            <div className="legenda">
                <div>
                    <span id="salmao">•</span> Sim, não tive mais problemas com excesso de atividades.
                    <br />
                    <span id="laranja">•</span> Sim, mas apenas um(a) dos professores que reclamamos para o setor deixou apresentar os problemas reclamados.
                    <br />
                    <span id="ouro">•</span> Sim, por um tempo, depois voltou a repetir os problemas reclamados.
                    <br />
                    <span id="ciano">•</span> Sim, o número de atividades diminuiu, mas não para uma por semana como diz a Orientação Normativa.
                    <br />
                    <span id="azul-escuro">•</span> Não, não resolveu o problema.
                </div>
            </div>

        </>
    );
}

export default ModalidadeEnsino;