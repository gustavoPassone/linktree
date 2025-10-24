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

// copiar email clicando no botão
const textCopyEmail = document.getElementById("copy-email-text");

document.getElementById("copyEmail").addEventListener("click", (e) => {
  e.preventDefault(); // impede o link de rolar para o topo
  navigator.clipboard.writeText("gmpassone@gmail.com");
  textCopyEmail.innerHTML = "Copiado!";
  setTimeout(() => {
    textCopyEmail.innerHTML = "Copiar e-mail";
  }, 2000);
});

// ------- //

// enviar email com o Formspree

const form = document.getElementById("form-contact");


form.addEventListener("submit", async function (event) {
  event.preventDefault(); // evita recarregar a página

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      modal.style.display = "none";
      form.reset();
    } else {
      alert("Ocorreu um erro ao enviar. Tente novamente.");
    }
  } catch (error) {
    alert("Erro de conexão. Verifique sua internet e tente novamente.");
  }
});