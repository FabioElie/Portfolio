function alternarTema() {
  document.documentElement.classList.toggle('escuro');
  const icon = document.getElementById('icon-tema');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
}

function alternarMenu() {
  var menu = document.getElementById('menu-mobile');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}

function fecharMenu() {
  document.getElementById('menu-mobile').style.display = 'none';
}
