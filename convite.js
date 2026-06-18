function confirmarPresenca() {
  const numero = "5514988285202"; // ✅ número correto
  const nome = prompt("Digite seu nome:");

  if (!nome) return;

  const msg = `${nome} confirma presença para a festa.`;
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;

  window.open(link, "_blank");
}

function abrirSugestao() {
  window.location.href = "sugestao.html";
}

function abrirMaps() {
  window.open(
    "https://www.google.com/maps/place/Villa+Casali/@-22.3911419,-49.1486053,697m/data=!3m1!1e3!4m6!3m5!1s0x94bf6476bfeeb589:0x46af11e568c345f6!8m2!3d-22.3911725!4d-49.1486172!16s%2Fg%2F11cltlfljw",
    "_blank"
  );
}

const musica = document.getElementById("musicaFundo");

window.addEventListener("load", () => {
  const musicaAtiva = sessionStorage.getItem("musicaAtiva");

  if (musicaAtiva === "true" && musica) {
    musica.play().catch(() => {});
  }
});

window.addEventListener("beforeunload", () => {
  if (musica) {
    musica.pause();
  }
});