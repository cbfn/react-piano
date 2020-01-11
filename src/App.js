import React from "react";
import styled from "styled-components";
import PianoBoard from "./PianoBoard";
import "./App.css";

function App() {
  return (
    <StyledApp>
      <h2>React Piano App</h2>
      <h1>A Funny piano made with React</h1>
      <div className="repository">
        Repository:&nbsp;
        <a
          href="https://github.com/cbfn/react-piano"
          target="_blank"
          rel="noopener noreferrer"
          title="Show me the code"
        >
          https://github.com/cbfn/react-piano
        </a>
      </div>
      <PianoBoard />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  text-align: center;
  color: #fff;
  h1 {
    margin-bottom: 10px;
    font-weight: 300;
    margin-top: 0;
  }
  h2 {
    margin-bottom: 0px;
  }
  .repository {
    margin-bottom: 40px;
    a {
      color: #fff;
      display: inline-block;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default App;
