import * as React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import { getYear, calculateBrand, getPlan } from "../helper";

const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border: 1px solid black;
  width: 100%;
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 3rem;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.028),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.04),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.05),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.06),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.072),
      100px 100px 80px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1.2px solid #000000;
  &:hover {
    cursor: pointer;
    background-color: #000000;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.028),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.04),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.05),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.06),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.072),
      100px 100px 80px rgba(0, 0, 0, 0.1);
    transition: all 300ms linear;
    color: white;
  }
  appearance: none;
`;

const InputRadio = styled.input`
  height: 20px;
  width: 20px;
  margin: 0 1rem;
  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({saveResume}) => {
  const [data, saveData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, saveError] = useState(false);

  // Extract values from state
  const { brand, year, plan } = data;

  const getInfo = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const quoteInsurance = (e) => {
    e.preventDefault();

    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);

    let result = 2000;

    const diff = getYear(year);

    result -= (diff * 3 * result) / 100;

    result = calculateBrand(brand) * result;

    const incrementPlan = getPlan(plan);
    result = parseFloat(incrementPlan * result).toFixed(2);

    saveResume({
      quote: result,
      data
    })
  };

  return (
    <form onSubmit={quoteInsurance}>
      {error ? <Error>All fields are required</Error> : null}
      <Field>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={getInfo}>
          <option value=""> -- CHOOSE ONE --</option>
          <option value="American">American</option>
          <option value="European">European</option>
          <option value="Asian">Asian</option>
        </Select>
      </Field>
      <Field>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={getInfo}>
          <option value="">-- CHOOSE ONE --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Label>Plan</Label>
      <InputRadio
        type="radio"
        name="plan"
        value="basic"
        checked={plan === "basic"}
        onChange={getInfo}
      />
      Basic
      <InputRadio
        type="radio"
        name="plan"
        value="complete"
        checked={plan === "complete"}
        onChange={getInfo}
      />{" "}
      Complete
      <Button type="submit">Quote</Button>
    </form>
  );
};
export default Form;
