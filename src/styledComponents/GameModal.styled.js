import styled from "styled-components";

const GameModal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.343);
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    z-index: 10;
    background-color: white;
    border: 9px solid;
    padding: 28px;
    border-radius: 10px;
    max-width: 400px;
    border-image: linear-gradient(
        to right,
        #188ff3 20%,
        #f37a18 20%,
        #f37a18 50%,
        #e118f3 50%,
        #e118f3 80%,
        #18f384 80%
      )
      4;

    @media (max-width: 290px) {
      transform: scale(0.95);
    }

    animation: animate 0.6s;

    @keyframes animate {
      0% {
        transform: scale(0);
      }

      100% {
        transform: scale(1);
      }
    }

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
