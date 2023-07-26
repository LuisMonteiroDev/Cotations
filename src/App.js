import './App.css';
import { useState, useEffect } from 'react';
import { fetchCotationsData } from './services/axios';

function App() {
  const [cotationsData, setCotationsData] = useState({});

  useEffect(() => {
    const getCotationsData = async () => {
      const data = await fetchCotationsData();
      setCotationsData(data);
    };

    getCotationsData();
  }, [])

  return (
    <div className="App">
      <h1 className='title'>Cotações das moedas:</h1>
      <div className='card-container'>
        {Object.entries(cotationsData).map(([currentPair, values]) => (
        <p className='card' key={currentPair}>
          {currentPair}: {values.bid}
        </p>
        ))}
      </div>
    </div>
  );
}

export default App;
