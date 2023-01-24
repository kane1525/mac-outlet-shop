const filtersBtn = document.querySelector('.searchbar__button_filters');
const settingsBtn = document.querySelector('.searchbar__button_settings');
const filtersPopup = document.querySelector('.filters-popup');
const settingsPopup = document.querySelector('.settings-popup');
const cartBtn = document.querySelector('.cart');
const cartPopup = document.querySelector('.cart-popup');
const productList = document.querySelector('.product-list');

filtersBtn.addEventListener('click', () => {
  settingsPopup.classList.remove('opened');
  filtersPopup.classList.toggle('opened');
});

settingsBtn.addEventListener('click', () => {
  filtersPopup.classList.remove('opened');
  settingsPopup.classList.toggle('opened');
});

cartBtn.addEventListener('click', () => {
  cartPopup.classList.toggle('opened');
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

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
