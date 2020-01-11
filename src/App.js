import React from "react";
import styled from "styled-components";
import PianoBoard from "./PianoBoard";
import "./App.css";

function App() {
  return (
    <StyledApp>
      <h2>React Piano App</h2>
      <h1>A Funny piano made with React</h1>
      <PianoBoard />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  text-align: center;
  color: #fff;
  h1 {
    margin-bottom: 50px;
    font-weight: 300;
    margin-top: 0;
  }
  h2 {
    margin-bottom: 0px;
  }
`;

export default App;
