const titleDiv = document.getElementById("title-div");

const titleDescription = document.getElementById("title-description");
titleDescription.innerText = "You love,";

// ---------- OPÇÃO 1 ----------
const loftSpan = document.createElement("span");
loftSpan.innerText = "your loft!";
loftSpan.style.fontFamily = "Ropa Sans";
loftSpan.style.fontWeight = 400;
loftSpan.style.fontSize = "10px";
loftSpan.style.lineHeight = "11px";
loftSpan.style.color = "#AAAAAA";

titleDiv.appendChild(loftSpan);

// ---------- OPÇÃO 2 ----------
// titleDiv.innerHTML += "<span> your loft! </span>";

// Adicionar a animação updown ao paragraph
// depois de 10 segundos da página ter carregada
setTimeout(() => {
  const paragraph = document.getElementById("paragraph");
  paragraph.style.animation = "updown 5s";
}, 10000);

// Mudar a imagem do carrousel a cada 5 segundos
let contador = 1;
const backgroundImages = [
  'url("images/Rectangle1.svg")',
  'url("images/Rectangle2.svg")',
  'url("images/Rectangle3.svg")',
  'url("images/Rectangle4.svg")',
  'url("images/Rectangle5.svg")',
  'url("images/Rectangle6.svg")',
];
setInterval(() => {
  const banner = document.querySelector(".banner");
  banner.style.background = backgroundImages[contador];
  banner.style.backgroundPosition = "center";
  banner.style.backgroundRepeat = "no-repeat";
  banner.style.backgroundSize = "cover";
  if (contador == 5) {
    contador = 0;
  } else contador++;
}, 5000);
