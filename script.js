let affiche = document.getElementById("reponseOperation");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (affiche.textContent === "0") {
      affiche.textContent = button.textContent;
    } else {
      affiche.textContent += button.textContent;
    }
  });
});
