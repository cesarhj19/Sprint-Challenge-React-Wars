import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: lightgrey;
  margin: 10px;
  width: 30%;
  display: inline-block;
  border-radius: 5px;
  text-align: center;
`;

function Card() {
  const [card, setCard] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people')
      .then(res => {
        const card = res.data.results;
        console.log(card);
        setCard(card);
      })
      .catch(err => {
        const error = err.response;
        console.log(error);
        setError(error);
      });
  }, []);

  return (
    <div className="card-container">
      {card.map(person => {
        return (
          <StyledDiv>
            <h2>{person.name}</h2>
            <p>Was born in: {person.birth_year}</p>
          </StyledDiv>
        );
      })}
    </div>
  );
}

export default Card;
