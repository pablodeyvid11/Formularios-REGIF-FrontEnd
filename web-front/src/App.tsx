import React, { useState, useEffect } from 'react';
import './App.css';
import Select from 'react-select';
import { getRespostas, getRespostasByCampus } from './Api';
import resposta from './Types/resposta';
import campusType from './Types/campusType';
import options from './optionsCampusSelect';
import NavBar from "./NavBar";
import GraficosArea from './GraficosArea';
import Relatos from './Relatos';
import Footer from './Footer';

function App() {


  const [campus, setCampus] = useState<campusType>({ label: "", value: "" });

  const [respostas, setRespostas] = useState<resposta[]>([]);

  let handleCampus = (selected: campusType | null) => {
    if (selected) {
      getRespostasByCampusData(selected.value);
      setCampus(selected);
    }
  }

  let getRespostasByCampusData = (campus: string) => {
    Promise.resolve(getRespostasByCampus(campus)).then(function (data) {
      setRespostas(data as resposta[]);
    });
  }

  useEffect(() => {
    Promise.resolve(getRespostas()).then(function (data) {
      setRespostas(data as resposta[]);
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="all">
        <h3 className="escolha-select">Escolha qual campus do IFRN você deseja consultar: </h3>
        <div className="select">
          <Select
            options={options}
            onChange={handleCampus}
          />
        </div>
        <GraficosArea respostas={respostas} key={respostas.length + 550}></GraficosArea>
        <Relatos respostas={respostas} key={respostas.length + 510}></Relatos>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;