import styled from "styled-components";

const FormModal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
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

    h2 {
      font-size: 40px;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;

      input {
        padding: 8px;
        margin: 10px 0;
        font-size: 20px;
      }

      button {
        cursor: pointer;
        font-size: 24px;
        border: 2px solid black;
        padding: 10px 0;
        margin: 10px 0;
        transition: 0.2s ease;

        &:active {
          padding: 15px;
        }
      }
    }
  }
`;

export default FormModal;
