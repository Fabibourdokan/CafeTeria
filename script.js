const menuItems = [
  {
    name: 'Espresso',
    price: 'R$ 9,00',
    description: 'Intenso, aromático e com corpo perfeito para o início do dia.',
    imageClass: 'espresso',
  },
  {
    name: 'Cappuccino',
    price: 'R$ 14,00',
    description: 'Cremoso, equilibrado e finalizado com uma camada de espuma suave.',
    imageClass: 'cappuccino',
  },
  {
    name: 'Croissant',
    price: 'R$ 12,00',
    description: 'Folhado, dourado e perfeito para acompanhar um café quente.',
    imageClass: 'croissant',
  },
  {
    name: 'Torta de Chocolate',
    price: 'R$ 16,00',
    description: 'Uma sobremesa rica, cremosa e irresistivelmente saborosa.',
    imageClass: 'dessert',
  },
];

const menuGrid = document.getElementById('menu-grid');

function renderMenu(items) {
  if (!menuGrid) return;

  menuGrid.innerHTML = items
    .map(
      ({ name, price, description, imageClass }) => `
        <article class="menu-item">
          <div class="item-image ${imageClass}" aria-label="${name}"></div>
          <div class="item-content">
            <div class="item-topline">
              <h3>${name}</h3>
              <span>${price}</span>
            </div>
            <p>${description}</p>
          </div>
        </article>
      `
    )
    .join('');
}

renderMenu(menuItems);

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});
