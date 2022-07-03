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
`;

export default HomeButton;
