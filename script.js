let affiche = document.getElementById("reponseOperation");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
let premierNombre = null; // Premier nombre
let operateur = null; // Operateur (+, -, *, /)
let etatAttente = false; //

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (etatAttente) {
      affiche.textContent = button.textContent;
      etatAttente = false;
    } else {
      affiche.textContent =
        affiche.textContent === "0"
          ? button.textContent
          : affiche.textContent + button.textContent;
    }
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const operation = button.textContent;

    if (premierNombre === null) {
      premierNombre = parseFloat(affiche.textContent);
      operateur = operation;
      etatAttente = true;
    }
  });
});
