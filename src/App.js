import './App.css';
import { useState, useEffect } from 'react';
import { fetchCotationsDataUSD, fetchCotationsDataBTC, fetchCotationsDataEUR } from './services/axios';

function App() {
  const [cotationsUSD, setCotationsUSD] = useState({});
  const [cotationsBTC, setCotationsBTC] = useState({});
  const [cotationsEUR, setCotationsEUR] = useState({});


  useEffect(() => {
    const getCotationsUSD = async () => {
      const data = await fetchCotationsDataUSD();
      setCotationsUSD(data);
    };

    getCotationsUSD();
  }, [])

  useEffect(() => {
    const getCotationsBTC = async () => {
      const data = await fetchCotationsDataBTC();
      setCotationsBTC(data);
    };

    getCotationsBTC();
  }, [])

  useEffect(() => {
    const getCotationsEUR = async () => {
      const data = await fetchCotationsDataEUR();
      setCotationsEUR(data);
    };

    getCotationsEUR();
  }, [])

  return (
    <div className="App">
      <h1 className='title'>Cotações das moedas:</h1>
      <div className='card-container'>
        {Object.entries(cotationsUSD).map(([currentPair, values]) => (
        <p className='card' key={currentPair}>
          {values.name}
          <br></br>
          {currentPair}: {values.bid} 
        </p>
        ))}
      </div>
      <div className='card-container'>
        {Object.entries(cotationsBTC).map(([currentPair, values]) => (
        <p className='card-btc' key={currentPair}>
          {values.name}
          <br></br>
          {currentPair}: {values.bid}
        </p>
        ))}
      </div>
      <div className='card-container'>
        {Object.entries(cotationsEUR).map(([currentPair, values]) => (
        <p className='card-eur' key={currentPair}>
          {values.name}
          <br></br>
          {currentPair}: {values.bid}
        </p>
        ))}
      </div>
      <div className='card-container'>
        {Object.entries(cotationsBTC).map(([currentPair, values]) => (
        <p className='card-btc' key={currentPair}>
          {currentPair}: {values.bid}
        </p>
        ))}
      </div>
      <div className='card-container'>
        {Object.entries(cotationsEUR).map(([currentPair, values]) => (
        <p className='card-eur' key={currentPair}>
          {currentPair}: {values.bid}
        </p>
        ))}
      </div>
    </div>
  );
}

export default App;
