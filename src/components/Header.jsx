import React from "react";
import styled from "@emotion/styled";
import Fade from "@stahl.luke/react-reveal";

const ContainerHeader = styled.header`
  background-color: #203a43;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const TextHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27px", serif;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <ContainerHeader>
      <TextHeader>
        <Fade left cascade>{title}</Fade>
      </TextHeader>
    </ContainerHeader>
  );
};

export default Header;
