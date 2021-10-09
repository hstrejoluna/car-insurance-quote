import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

const App = () => {
  const [resume, saveResume] = useState({
    quote: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const [loading, saveLoading] = useState(false);

  const { quote, data } = resume;

  return (
    <Container>
      <Header title="Car Insurance Quote" />
      console.log({quote})
      <ContainerForm>
        <Form saveResume={saveResume} saveLoading={saveLoading} />
        {loading ? <Spinner /> : null}

        <Resume data={data} />
        {!loading ?  <Result quote={quote} /> : null}
      </ContainerForm>
    </Container>
  );
};

export default App;
