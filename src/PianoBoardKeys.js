import React, { useEffect } from "react";
import styled from "styled-components";

function PianoBoardKeys(props) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(handleKeyDown);
    };
  });

  const handlePlayNote = note => e => {
    const selectedNote = typeof note !== "string" ? note.dataset.note : note;
    const noteAudio = document.getElementById(selectedNote);

    noteAudio.currentTime = 0;
    noteAudio.play();

    if (typeof note !== "string") {
      note.classList.add("active");
      noteAudio.addEventListener("ended", () => {
        note.classList.remove("active");
      });
    }
  };

  function handleKeyDown(e) {
    if (e.repeat) return;
    const key = e.key;
    const keyCode = document.querySelectorAll("[data-keycode]");

    keyCode.forEach((element, k) => {
      if (element.dataset.keycode === key) {
        handlePlayNote(element).call();
      }
    });
  }

  return (
    <StyledPianoBoardKeys>
      {props.keys.map((key, index) => (
        <div key={index}>
          <div
            data-note={key.note}
            data-keycode={key.keyCode}
            className={`key ${key.color}`}
            onClick={handlePlayNote(key.note)}
          />
          <audio id={key.note} src={require(`./notes/${key.note}.mp3`)} />
        </div>
      ))}
    </StyledPianoBoardKeys>
  );
}

const StyledPianoBoardKeys = styled.div`
  display: flex;
  div {
    position: relative;
  }
  .key {
    height: calc(var(--width) * 4);
    width: var(--width);
    cursor: pointer;
  }
  .white {
    --width: 100px;
    background-color: white;
    border: 1px solid #333;
  }

  .white.active,
  .white:hover {
    background-color: #ccc;
  }

  .black {
    --width: 60px;
    background-color: black;
    margin-left: calc(var(--width) / -2);
    margin-right: calc(var(--width) / -2);
    z-index: 2;
  }

  .black.active,
  .black:hover {
    background-color: #333;
  }
`;

export default PianoBoardKeys;
