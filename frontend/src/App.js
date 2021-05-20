import React, { useEffect, useState } from 'react';
import './App.css';
import Graph from './Graph';
import InputForm from './InputForm';

function App() {
  const [userName, setName] = useState("User");
  const [userRating, setRating] = useState("0");
  const [ratingData, setRatingData] = useState('');
  //const [data_ahc1, setDataAhc1] = useState('');
  //const [data_ahc2, setDataAhc2] = useState('');

  useEffect(() => {
    fetch('/api/finalRatings')
      .then((res) => res.json())
      .then((datas) => setRatingData(datas.data));
  }, [])
/*
  useEffect(() => {
    fetch('/api/ahc1')
      .then((res) => res.json())
      .then((datas) => setDataAhc1(datas.data));
  }, [])

  useEffect(() => {
    fetch('/api/ahc2')
      .then((res) => res.json())
      .then((datas) => setDataAhc2(datas.data));
  }, [])
*/
  return (
    <div className="App">
      <h1 className="bg-primary text-white display-4">AtCoder Heuristic Statistics</h1>
      <div className="container mt-3">
        <h4>About</h4>
        <h6>AtCoder Heuristic Contestのレート分布を表示します．<br />
          ユーザ名を入力すると，分布における該当ユーザの位置にハイライトします．
        </h6>
        <InputForm userName={userName} userRating={userRating} setName={setName} setRating={setRating} ratingData={ratingData}/>
        <Graph userRating={userRating}/>
      </div>
    </div>
  );
}

export default App;