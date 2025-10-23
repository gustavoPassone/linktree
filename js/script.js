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

// ENVIANDO EMAILS COM O EmailJS
(function () {
  emailjs.init({
    publicKey: "K6g6lRQrq2EIApm3l",
  });
})();

// seleciona o formulário
const form = document.getElementById("form-contact");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // o que está enviando
  const btn = document.getElementById("btn-submit-form");
  btn.textContent = "Enviando...";
  btn.disabled = true;

  emailjs.sendForm("service_3mei7bx", "template_x5ehnus", this).then(
    function () {
      alert("Mensagem enviada com sucesso!");
      form.reset();
      btn.textContent = "Enviar";
      btn.disabled = false;
    },
    function (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro ao enviar. Tente novamente.");
      btn.textContent = "Enviar";
      btn.disabled = false;
    }
  );
});
