import { Button } from "@/components/ui/button";

const colors = [
  ["#7f1d1d", "#fecaca"],
  ["#365314", "#d9f99d"],
  ["#1e3a8a", "#bfdbfe"],
  ["#701a75", "#f5d0fe"],
  ["#581c87", "#e9d5ff"],
  ["#0c4a6e", "#bae6fd"],
  ["#a5f3fc", "#083344"],
  ["#fbcfe8", "#500724"],
];

const RandomColorButton = () => {
  function setRandomColor() {
    const body = document.querySelector<HTMLBodyElement>("body");
    const [bg, fg] = colors[Math.floor(Math.random() * colors.length)];
    body.style.setProperty("--random-button-bg", bg);
    body.style.setProperty("--random-button-fg", fg);
  }

  return (
    <Button
      onClick={setRandomColor}
      id="randomColor"
      className="bg-[--random-button-bg] text-[--random-button-fg]"
    >
      Click me to set me to a random color
    </Button>
  );
};

export default RandomColorButton;
