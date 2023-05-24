import React, { useState, useEffect } from 'react';

function F1Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/scrape')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error(err))
  }, []);
  

  return (
    <div>
      <h1>F1 Driver Standings</h1>
      {data.map((driver, index) => (
        <div key={index}>
          <h2>{driver.Position}. {driver.Driver}</h2>
          <p>Nationality: {driver.Nationality}</p>
          <p>Car: {driver.Car}</p>
          <p>Points: {driver.Points}</p>
        </div>
      ))}
    </div>
  );
}

export default F1Data;
