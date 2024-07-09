document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".button-container");

  const buttonTexts = [
    "What is chicken?",
    "blank",
    "blank",
    "blank",
    "blank",
    "Where can I find chicken?",
  ];
  for (let i = 0; i < buttonTexts.length; i++) {
    const button = document.createElement("button");
    button.id = `button${i + 1}`;
    button.textContent = buttonTexts[i];
    button.addEventListener("click", () => handleButtonClick(i + 1));
    container.appendChild(button);
  }
});
``;
