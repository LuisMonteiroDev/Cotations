import { useState, useEffect } from 'react';
import { fetchCotationsData } from './services/axios';
import { BarController } from 'chart.js';

function App() {
  const [cotationsData, setCotationsData] = useState({});
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const getCotationsData = async () => {
      const data = await fetchCotationsData();
      setCotationsData(data);
    };

    getCotationsData();
  }, [])

  useEffect(() => {
    const createChartData = () => {
      const labels = Object.keys(cotationsData);
      const values = Object.values(cotationsData).map((currencyData) => currencyData.bid);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Cotação',
            data: values,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          }
        ]
      })
    };
    
    if (Object.keys(cotationsData.length > 0)) {
      createChartData();
    }

  }, [cotationsData])

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
      {/* <BarController data={chartData} options={{ scales: { y: { beginAtZero: true } } }} /> */}
    </div>
  );
}

export default App;
