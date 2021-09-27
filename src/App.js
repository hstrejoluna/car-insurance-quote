import React from "react";
import Header from "./components/Header";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

import styled from "@emotion/styled";

const App = () => {
  return <Header title="Car Insurance Quote" />;
}

export default App;
