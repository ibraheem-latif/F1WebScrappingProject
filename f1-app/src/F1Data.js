import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button } from 'react-bootstrap';
import tw from 'twin.macro';
import styled from 'styled-components';

const CardBody = styled.div`
  ${tw`bg-white rounded-xl shadow-lg p-4`}
`;

const CardTitle = styled.h2`
  ${tw`text-2xl font-semibold`}
`;

const CardText = styled.p`
  ${tw`text-lg`}
`;

const StyledButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 15px;
  font-weight: bold;
  border-radius: 0; // make corners square
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;


function F1Data() {
  const [data, setData] = useState([]);
  const [view, setView] = useState('carousel');

  useEffect(() => {
    fetch('http://localhost:5000/scrape')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error(err))
  }, []);

  const toggleView = () => {
    if (view === 'carousel') {
      setView('table');
    } else {
      setView('carousel');
    }
  };

  return (
    <div>
      <h1 tw="text-3xl font-bold">F1 Driver Standings</h1>
      <StyledButton onClick={toggleView}>Toggle View</StyledButton>

      {view === 'carousel' ? (
        <Carousel className='' showThumbs={false}>
          {data.map((driver, index) => (
            <CardBody key={index}>
              <CardTitle>{driver.Position}. {driver.Driver}</CardTitle>
              <CardText>Nationality: {driver.Nationality}</CardText>
              <CardText>Car: {driver.Car}</CardText>
              <CardText>Points: {driver.Points}</CardText>
            </CardBody>
          ))}
        </Carousel>
      ) : (
        <div>
          {data.map((driver, index) => (
            <CardBody key={index}>
              <CardTitle>{driver.Position}. {driver.Driver}</CardTitle>
              <CardText>Nationality: {driver.Nationality}</CardText>
              <CardText>Car: {driver.Car}</CardText>
              <CardText>Points: {driver.Points}</CardText>
            </CardBody>
          ))}
        </div>
      )}
    </div>
  );
}

export default F1Data;
