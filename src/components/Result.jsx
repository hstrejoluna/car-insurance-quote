import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Message = styled.p`
  background-color: black;
  color: white;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultQuote = styled.p`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #e1e1e1;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;
const StrQuote = styled.p`
  color: black;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ quote }) => {
  return quote === 0 ? (
    <Message>No hay resultados</Message>
  ) : (
    <ResultQuote>
      <StrQuote>
        the total is: <span>{quote}</span>
      </StrQuote>
    </ResultQuote>
  );
};

Result.PropTypes = {
  quote: PropTypes.number.isRequired,
};
export default Result;
