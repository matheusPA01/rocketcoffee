/*
  Código de criação do menu hamburger
*/

// Hamburger menu div creation
const hamburgerDiv = document.createElement('div')

// add class to div
hamburgerDiv.classList.add('hamburger-menu-overlay')
hamburgerDiv.classList.add('invisible')

// Hamburger menu content
hamburgerDiv.innerHTML = `
  <div class="hamburger-menu-overlay-header">
    <div class="logo-header-mobile-hamburger">
      <img
        src="assets/logo-mobile.svg"
        alt="logo mobile"
        class="logo-header-image-mobile"
      />
    </div>

    <button class="hamburger-close" id="hamburger-close">
      <img src="assets/menu-buguer-close.svg" alt="menu close" />
    </button>
  </div>

  <ul class="hamburger-menu-list" id="hamburger-menu-list">
    <li class="hamburger-menu-itens"><a href="#">Home</a></li>
    <li class="hamburger-menu-itens"><a href="#">Menu</a></li>
    <li class="hamburger-menu-itens"><a href="#">Recompensas</a></li>
    <li class="hamburger-menu-itens"><a href="#">Gift Cards</a></li>
    <li class="hamburger-menu-itens"><a href="#">Lojas</a></li>
  </ul>
`
// Catching navbar
const navbarRocket = document.getElementById('navbar-rocket-coffee')

// Insert hamburger div
navbarRocket.prepend(hamburgerDiv)

/*
  Código que abre e fecha o menu hamburger
*/

// Catching button to open menu
const openMenu = document.querySelector('#hamburger')

// Catching button to close menu
const closeMenu = document.querySelector('#hamburger-close')

// Click event to add and remove classes to open menu
openMenu.addEventListener('click', () => {
  document
    .querySelector('.hamburger-menu-overlay')
    .classList.remove('invisible')
  document.querySelector('.hamburger-menu-overlay').classList.add('toggle-menu')
})

// Click event to add and remove classes to close menu
closeMenu.addEventListener('click', () => {
  document.querySelector('.hamburger-menu-overlay').classList.add('invisible')
  document
    .querySelector('.hamburger-menu-overlay')
    .classList.remove('toggle-menu')
})

/*
  Código para marcar item selecionado na navbar
*/

// Catching navbar list
const hamburgerSelected = document.querySelector('#hamburger-menu-list')

/*
  Quando um item da lista é clicado, ele roda um laço
  para remover a classe de marcação, e em seguida
  adiciona a classe ao target.
*/

hamburgerSelected.addEventListener('click', e => {
  document.querySelectorAll('.selected').forEach(function (item) {
    item.classList.remove('selected')
  })

  e.target.parentNode.classList.add('selected')
})
