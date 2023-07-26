import { useState, useEffect } from 'react';
import { fetchCotationsData } from './services/axios';

function App() {
  const [cotationsData, setCotationsData] = useState({});

  useEffect(() => {
    const getCotationsData = async () => {
      console.log('error');
      const data = await fetchCotationsData();
      setCotationsData(data);
    };

    getCotationsData();
  }, [])
  return (
    <div className="App">
      <h1>Cotações das moedas:</h1>
      <div>
        {Object.entries(cotationsData).map(([currentPair, values]) => (
        <p key={currentPair}>
          {currentPair}: {values.bid}
        </p>
        ))}
      </div>
    </div>
  );
}

export default App;
