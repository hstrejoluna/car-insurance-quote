import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { firstUppercase } from "../helper";
import Fade from "@stahl.luke/react-reveal/Fade";

const ContainerResume = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #000000;
  color: #fff;
  margin-top: 1rem;
`;

const Resume = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand === "" || year === "" || plan === "") return null;

  return (
    <Fade>
      <ContainerResume>
        <h2>Quote Resume</h2>
        <ul>
          <li>Brand: {firstUppercase(brand)}</li>
          <li>Plan: {firstUppercase(plan)}</li>
          <li>Car Year: {year}</li>
        </ul>
      </ContainerResume>
    </Fade>
  );
};

Resume.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Resume;
