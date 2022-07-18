import styled from "styled-components";

const HomeButton = styled.button`
  cursor: pointer;
  border: 8px solid white;

  border-radius: 8px;
  font-size: 35px;
  color: #ffffff;
  padding: 10px 15px;
  margin: 0 20px;
  transition: 0.6s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 450px) {
    font-size: 27px;
  }

  @media (max-width: 370px) {
    font-size: 24px;
    border: 4px solid white;
    padding: 7px 12px;
    margin: 0 8px;
  }
`;

export default HomeButton;
