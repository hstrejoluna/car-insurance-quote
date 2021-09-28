import * as React from "react";
import styled from "@emotion/styled";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  flex: 0 0 100px;
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

const Form = () => {
  return (
    <form>
      <Field>
        <Label>Brand</Label>
        <Select>
          <option value="1"> -- CHOOSE ONE --</option>
          <option value="2">American</option>
          <option value="3">European</option>
          <option value="4">Asian</option>
        </Select>
      </Field>
      <Field>
        <Label>Year</Label>
        <Select>
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
      <InputRadio type="radio" name="plan" value="basic" />
      Basic
      <InputRadio type="radio" name="plan" value="complete" />
      <button type="button">Quote</button>
    </form>
  );
};

export default Form;
