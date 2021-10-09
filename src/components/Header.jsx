import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Fade from "@stahl.luke/react-reveal";

const ContainerHeader = styled.header`
  background-color: #00000076;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const TextHeader = styled.h1`
  font-size: 3rem;
  margin: 0;
  font-family: "Gemunu Libre", sans-serif;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <ContainerHeader>
      <TextHeader>
        <Fade left cascade>
          {title}
        </Fade>
      </TextHeader>
    </ContainerHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
