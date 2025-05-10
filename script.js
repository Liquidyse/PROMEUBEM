let currentPhotoIndex = 1;
let nextPhotoIndex = 2;
const totalPhotos = 9;
let currentBackground = 1;

function changeBackgroundImage() {
  const background1 = document.getElementById('background1');
  const background2 = document.getElementById('background2');

  const nextIndex = (currentPhotoIndex % totalPhotos) + 1;
  const nextImage = `url('fotos/foto${nextIndex}.jpg')`;

  const currentBackgroundDiv = currentBackground === 1 ? background1 : background2;
  const nextBackgroundDiv = currentBackground === 1 ? background2 : background1;

  // Coloca a nova imagem no fundo secundário
  nextBackgroundDiv.style.backgroundImage = nextImage;

  // Adiciona a classe 'active' para iniciar a transição
  setTimeout(() => {
    currentBackgroundDiv.classList.remove('active'); // Remove a opacidade do fundo atual
    nextBackgroundDiv.classList.add('active'); // Adiciona opacidade ao próximo fundo
  }, 100);

  // Troca os índices para continuar o ciclo
  currentPhotoIndex = nextIndex;
  currentBackground = currentBackground === 1 ? 2 : 1;
}

// Inicializa os fundos
window.onload = function() {
  setTimeout(() => {
    document.getElementById('background1').classList.add('active');
  }, 100);
}

// Troca de imagem de fundo a cada 4 segundos
setInterval(changeBackgroundImage, 4000);
