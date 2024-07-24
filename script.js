document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".button-container");

  const buttonText = [
    "what-is-chicken.html",
    "blank.html",
    "blank.html",
    "blank.html",
    "blank.html",
    "where-can-i-find-chicken.html",
  ];

  const handleButtonClick = (index) => {
    const fileName = buttonText[index - 1];
    if (fileName !== "blank.html") {
      window.location.href = `answers/${fileName}`;
    }
  };

  for (let i = 0; i < buttonText.length; i++) {
    const button = document.createElement("button");
    button.id = `button${i + 1}`;
    button.textContent = buttonText[i].replace(".html", "").replace(/-/g, " ");
    button.addEventListener("click", () => handleButtonClick(i + 1));
    container.appendChild(button);
  }
});
