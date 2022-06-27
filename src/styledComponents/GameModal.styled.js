import styled from "styled-components";

const GameModal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.343);
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    z-index: 10;
    background-color: white;
    border: 2px solid blue;
    padding: 28px;
    border-radius: 10px;
    max-width: 400px;

    h2 {
      font-size: 33px;
    }

    p {
      margin: 10px 0;
      font-size: 18px;
    }

    form {
      display: flex;
      flex-direction: column;

      label,
      input,
      select {
        font-size: 21px;
        padding: 8px;
      }

      label {
        margin-top: 11px;
      }

      button {
        cursor: pointer;
        border: 2px solid black;
        font-size: 21px;
        padding: 10px 0;
        margin: 18px 0;
      }
    }
  }
`;

export default GameModal;
