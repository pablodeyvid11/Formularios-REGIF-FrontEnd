import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { VictoryBar, VictoryChart } from 'victory';
import Select from 'react-select';
import { getRespostas, getRespostasByCampus } from './Api';
import resposta from './Types/resposta';
import campusType from './Types/campusType';
import options from './optionsCampusSelect';
import NavBar from "./NavBar";
import GraficosArea from './GraficosArea';


function App() {


  const [campus, setCampus] = useState<campusType>({ label: "", value: "" });

  const [respostas, setRespostas] = useState<resposta[]>([]);

  let handleCampus = (selected: campusType | null) => {
    if (selected) {
      getRespostasByCampusData(selected.value);
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

  let actionPegarDados = () => {
    console.log(respostas);
  }

  return (
    <>
      <NavBar />
      <Select
        options={options}
        onChange={handleCampus}
      />
      
      <GraficosArea respostas={respostas} key={respostas.length}></GraficosArea>
    </>
  );
}

export default App;