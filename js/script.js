// ---- tema ----
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const lightIcon = themeToggle.querySelector(".light-icon");
  const darkIcon = themeToggle.querySelector(".dark-icon");

  //aplicar o tema
  function applyTheme(isDarkMode) {
    if (isDarkMode) {
      body.classList.add("dark-mode");
      lightIcon.style.display = "none";
      darkIcon.style.display = "inline";
    } else {
      body.classList.remove("dark-mode");
      lightIcon.style.display = "inline";
      darkIcon.style.display = "none";
    }
  }

  //mudar de tema
  themeToggle.addEventListener("click", () => {
    const isDarkMode = body.classList.contains("dark-mode");
    //inverte o tema atual
    applyTheme(!isDarkMode);
  });
});

// ---- modal ----
const modal = document.getElementById("modal");
const btnAbrir = document.getElementById("btn-contact-form");
const btnFechar = document.querySelector(".fechar");

// abrir
btnAbrir.addEventListener("click", () => {
  modal.style.display = "block";
  // para não rolar o fundo
  document.body.style.overflow = "hidden";
});

// fechar
function fecharModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

btnFechar.addEventListener("click", fecharModal);

// fechar clicando na tela
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    fecharModal();
  }
});

// fechar clicando no Esc
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    fecharModal();
  }
});