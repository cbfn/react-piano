import React from "react";
import styled from "styled-components";
import PianoBoardKeys from "./PianoBoardKeys";

function PianoBoard() {
  const notes = [
    { keyCode: "z", note: "C", color: "white" },
    { keyCode: "s", note: "Db", color: "black" },
    { keyCode: "x", note: "D", color: "white" },
    { keyCode: "d", note: "Eb", color: "black" },
    { keyCode: "c", note: "E", color: "white" },
    { keyCode: "v", note: "F", color: "white" },
    { keyCode: "g", note: "Gb", color: "black" },
    { keyCode: "b", note: "G", color: "white" },
    { keyCode: "h", note: "Ab", color: "black" },
    { keyCode: "n", note: "A", color: "white" },
    { keyCode: "j", note: "Bb", color: "black" },
    { keyCode: "m", note: "B", color: "white" }
  ];

  return (
    <StyledPiano>
      <PianoBoardKeys keys={notes} />
    </StyledPiano>
  );
}

const StyledPiano = styled.div``;

export default PianoBoard;
