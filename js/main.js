// hover das imagens nav
const menuItems = document.querySelectorAll('.cabecalho__lista__item');

menuItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    const video = this.querySelector('video');
    if (video) {
      video.play();
      video.loop = true;
    }
  });

  item.addEventListener('mouseout', function() {
    const video = this.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });
});
// botao para voltar ao top
window.onscroll = function() {mostrarBotao()};

function mostrarBotao() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("voltar-ao-topo").style.display = "block";
  } else {
    document.getElementById("voltar-ao-topo").style.display = "none";
  }
}

function voltarAoTopo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
