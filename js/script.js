const body = document.querySelector('body');
const searchbarBtns = document.querySelectorAll('.searchbar__button');
const filtersBtn = document.querySelector('.searchbar__button_filters');
const settingsBtn = document.querySelector('.searchbar__button_settings');
const filtersPopup = document.querySelector('.filters-popup');
const settingsPopup = document.querySelector('.settings-popup');
const cartBtn = document.querySelector('.cart');
const cartPopup = document.querySelector('.cart-popup');
const productList = document.querySelector('.product-list');
const filtersItemsWrappers = document.querySelectorAll(
  '.filters__items-animation-wrapper'
);
const filtersCategories = document.querySelectorAll('.filters__category');
const filters = document.querySelector('.filters');

// думаю, это можно написать намного короче, пока что не понимаю, как
body.addEventListener('click', (e) => {
  if (
    !filtersBtn.contains(e.target) &&
    filtersBtn !== e.target &&
    !settingsBtn.contains(e.target) &&
    settingsBtn !== e.target &&
    !filtersPopup.contains(e.target) &&
    filtersPopup !== e.target &&
    !settingsPopup.contains(e.target) &&
    settingsPopup !== e.target
  ) {
    settingsPopup.classList.remove('opened');
    filtersPopup.classList.remove('opened');
  }
});

// Открываем и закрываем поп-ап фильтров
filtersBtn.addEventListener('click', (e) => {
  settingsPopup.classList.remove('opened');
  filtersPopup.classList.toggle('opened');
});

// Открываем и закрываем поп-ап настроек
settingsBtn.addEventListener('click', () => {
  filtersPopup.classList.remove('opened');
  settingsPopup.classList.toggle('opened');
});

// Открываем и закрываем поп-ап корзины
cartBtn.addEventListener('click', () => {
  cartPopup.classList.toggle('opened');
});

// получение рандомного числа
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Рендерим карточки
items.forEach((item) => {
  const card = document.createElement('div');
  card.innerHTML = `
      <button class="card__favourite product__favourite-button">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          class="product__favourite-icon">
          <path
            d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L10.6541 20.1341C11.4178 20.824 12.5803 20.8218 13.3413 20.129L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"></path>
        </svg>
      </button>
      <div class="product__main-part">
        <img
          class="product__image"
          src=${'img/' + item.imgUrl}
          alt="" />
        <a href="#" class="product__name">${item.name}</a>
        <div class="product__in-stock-info">
          <!-- prettier-ignore -->
          <svg class="product__in-stock-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9.5" stroke="#1BC943"/>
                <g clip-path="url(#clip0_14_17)">
                <path d="M8.6251 12.1063L6.01885 9.50002L5.13135 10.3813L8.6251 13.875L16.1251 6.37502L15.2438 5.49377L8.6251 12.1063Z" fill="#1BC943"/>
                </g>
                <defs>
                <clipPath id="clip0_14_17">
                <rect width="15" height="15" fill="white" transform="translate(3 2)"/>
                </clipPath>
                </defs>
              </svg>
          <p class="product__in-stock-text">
            <strong class="product__in-stock-amount">${
              item.orderInfo.inStock
            }</strong>
            left in stock
          </p>
        </div>
        <p class="product__price-info">
          Price: <strong class="product__price">${item.price}</strong> $
        </p>
        <button class="button">Add to cart</button>
      </div>
      <div class="product__additional-info">
        <!-- prettier-ignore -->
        <svg class="product__reviews-icon" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00008 15.7917L7.79175 14.6917C3.50008 10.8 0.666748 8.23333 0.666748 5.08333C0.666748 2.51667 2.68341 0.5 5.25008 0.5C6.70008 0.5 8.09175 1.175 9.00008 2.24167C9.90841 1.175 11.3001 0.5 12.7501 0.5C15.3167 0.5 17.3334 2.51667 17.3334 5.08333C17.3334 8.23333 14.5001 10.8 10.2084 14.7L9.00008 15.7917Z" fill="#F05454"/>
            </svg>
        <div class="product__reviews-info">
          <p class="product__positive-reviews">
            <strong class="product__reviews-percentage">${
              item.orderInfo.reviews + '%'
            }</strong>
            Positive reviews
          </p>
          <p class="product__reviews-average">Above average</p>
        </div>
        <div class="product__orders-info">
          <strong class="product__orders-amount">${getRandomInt(
            0,
            1001
          )}</strong>
          <p class="product__orders-text">orders</p>
        </div>
      </div>
  `;
  card.classList.add('product');
  productList.appendChild(card);
});

// Закрываем и открываем аккордеон
filtersCategories.forEach((category) => {
  category.addEventListener('click', (e) => {
    category.classList.toggle('filters__category_opened');
    category.nextElementSibling.classList.toggle(
      'filters__items-animation-wrapper_opened'
    );
  });
});

// filters.addEventListener('click', (e) => {
//   let filtersCategory = e.target.closest('.filters__category');
//   if (!filtersCategory) return;
//   filtersCategory.classList.toggle('filters__category_opened');
//   filtersCategory.nextElementSibling.classList.toggle(
//     'filters__items-animation-wrapper_opened'
//   );
// });

// получаем все продукты + все елементы productPopup, которые хотим изменить
const products = document.querySelectorAll('.product');
const productPopup = document.querySelector('.product-popup-wrapper');
const productPopupName = productPopup.querySelector('.product-popup__name');
const productPopupPrice = productPopup.querySelector('.product-popup__price');
const productPopupImage = productPopup.querySelector('.product-popup__image');
const productPopupStock = productPopup.querySelector(
  '.product-popup__stock-amount'
);
const productPopupInfo = productPopup.querySelector('.product-popup__info');

// вешаем обработчик клика на каждый продукт
products.forEach((product) => {
  // делаем, что б поп-ап не открывался при клике на "добавить в корзину"
  // или на "добавить в избранное"
  product.querySelector('.button').addEventListener('click', (e) => {
    e.stopPropagation();
  });
  product
    .querySelector('.product__favourite-button')
    .addEventListener('click', (e) => {
      e.stopPropagation();
    });
  // при нажатии на остальные части карточки, делаем что б поп-ап открылся
  product.addEventListener('click', (e) => {
    // Выбираем нужные нам елементы с карточки продукта, на которую клинкули
    const productName = product.querySelector('.product__name');
    const productStock = product.querySelector('.product__in-stock-amount');
    const productPrice = product.querySelector('.product__price');
    const productUrl = product
      .querySelector('.product__image')
      .getAttribute('src');
    const productAddInfo = product.querySelector('.product__additional-info');
    const cloneInfo = productAddInfo.cloneNode(true);

    // Вставляем в поп-ап ту инфу, которая уже есть в карточке
    productPopupName.textContent = productName.innerText;
    productPopupPrice.textContent = '$ ' + productPrice.textContent;
    productPopupStock.textContent = productStock.textContent;
    productPopupImage.setAttribute('src', productUrl);

    // Удаление характеристик прошлого товара с поп-апа
    productPopup.querySelector('.product__additional-info')?.remove();
    productPopup
      .querySelectorAll('.product-popup__characteristic')
      ?.forEach((item) => item.remove());

    // Вставляем елемент с инфой про отзывы и заказы
    cloneInfo.classList.add('product__additional-info_popup');
    productPopupInfo.appendChild(cloneInfo);

    // Находим нужный нам айтем в массиве, который пришел с бд по имени
    const currArrItem = items.find(
      (item) => item.name === productName.textContent
    );

    // Строим объект, по которому будем рендерить характеристики
    // prettier-ignore
    const props = {
      'Color': currArrItem.color.join(', '),
      'Operating System': currArrItem.os,
      'Chip': currArrItem.chip.name,
      'Height': currArrItem.size.height,
      'Width': currArrItem.size.width,
      'Depth': currArrItem.size.depth,
      'Weight': currArrItem.size.weight,
    };

    // Создаем елементы характеристик и вставляем их в поп-ап
    for (let key in props) {
      const characteristic = document.createElement('div');
      characteristic.classList.add('product-popup__characteristic');
      characteristic.innerHTML = `
        <span class="product-popup__characteristic-name">${key}:</span>
        <span class="product-popup__characteristic-value">${props[key]}</span>
      `;
      productPopupInfo.appendChild(characteristic);
    }

    // Показываем поп-ап
    productPopup.classList.add('opened_grid');
    // Не разрешаем прокручивать основной сайт
    body.style.overflow = 'hidden';
  });
});

// логика закрытия поп-апа продукта
productPopup.addEventListener('click', (e) => {
  if (e.target === productPopup) {
    productPopup.classList.remove('opened_grid');
    document.querySelector('body').style.overflow = 'auto';
  }
});

// открытие и закрытие фильтров на маленьких экранах
const mobFiltersBtn = document.querySelector('.filters-bar-item_filters-btn');
const mobileFiltersPopup = document.querySelector('.mobile-filters-popup');
const mobileFilters = mobileFiltersPopup.querySelector('.filters');

addEventListener('resize', (event) => {
  if (
    window.innerWidth > 940 &&
    mobileFiltersPopup.classList.contains('mobile-filters-popup_opened')
  ) {
    mobileFiltersPopup.classList.remove('mobile-filters-popup_opened');
    mobileFilters.classList.remove('filters_opened');
    body.style.overflow = 'auto';
  }
});

mobFiltersBtn.addEventListener('click', (e) => {
  mobileFiltersPopup.classList.add('mobile-filters-popup_opened');
  body.style.overflow = 'hidden';
  setTimeout(() => {
    mobileFilters.classList.add('filters_opened');
  }, 0);
});

mobileFiltersPopup.addEventListener('click', (e) => {
  if (e.target === mobileFiltersPopup) {
    mobileFilters.classList.remove('filters_opened');
    setTimeout(() => {
      mobileFiltersPopup.classList.remove('mobile-filters-popup_opened');
      body.style.overflow = 'auto';
    }, 300);
  }
});
