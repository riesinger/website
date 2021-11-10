import styled from "@emotion/styled";
import { Button } from "components/Button";

const colors = [
  "--palette-red-35",
  "--palette-blue-50",
  "--palette-green-50",
  "--palette-pink-40",
];

const StyledButton = styled(Button)`
  margin-bottom: 2.25rem;
`;

const RandomColorButton = () => {
  function setRandomColor() {
    const body = document.querySelector<HTMLBodyElement>("body");
    body.style.setProperty(
      "--riesinger-colors-brand",
      `hsla(var(${colors[Math.floor(Math.random() * 4)]}), 100%)`
    );
  }

  return (
    <StyledButton primary onClick={setRandomColor}>
      Click me to set a random color
    </StyledButton>
  );
};

export default RandomColorButton;
