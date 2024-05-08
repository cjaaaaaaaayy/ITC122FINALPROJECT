const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const closeShopping2 = document.querySelector('.closeShopping2');
const Chart = document.querySelector('.Chart');
const list = document.querySelector('.list');
const list2 = document.querySelector('.list2');
const list3 = document.querySelector('.list3');
const list4 = document.querySelector('.list4');
const list5 = document.querySelector('.list5');
const listCard = document.querySelector('.listCard');
const listCard2 = document.querySelector('.listCard2');
const body = document.querySelector('body');
const total = document.querySelector('.total');
const quantity = document.querySelector('.quantity');
const total2 = document.querySelector('.total2');
const paypalButton = document.getElementById('paypal-button');
const popup = document.querySelector('.popup');
const cartIcon = document.querySelector('.icon');

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

Chart.addEventListener('click', () => {
  body.classList.add('active2');
  body.classList.remove('active');
});

closeShopping2.addEventListener('click', () => {
  body.classList.remove('active2');
  body.classList.add('active');
});

const products = [
  {
    id: 1,
    name: 'Refrigirator',
    image: 'ref.jpg',
    price: 25000
  },
  {
    id: 2,
    name: 'Rice Cooker',
    image: 'rice.jpeg',
    price: 800
  }
  
];

const products2 = [
  {
    id: 11,
    name: 'CURVED TV',
    image: 'tv.jpg',
    price: 18000
  },
  {
    id: 12,
    name: 'VACUUM CLEANER',
    image: 'VAC.jpg',
    price: 1500
  }
  
];

const products3 = [
  {
    id: 21,
    name: 'AIRCONDITIONER',
    image: 'aircon.jpg',
    price: 28000
  },
  {
    id: 22,
    name: 'SPIRAL LAMP',
    image: 'LAMP.jpg',
    price: 1200
  }
  
];

const products4 = [
  {
    id: 31,
    name: 'COMPACT DRYER',
    image: 'LG.avif',
    price: 32000
  },
  {
    id: 32,
    name: 'WASHING MACHINE',
    image: 'WASH.png',
    price: 38000
  }
];
const products5 = [
  {
    id: 31,
    name: 'PRESSURE WATER',
    image: 'PRESS.webp',
    price: 7500
  },
  {
    id: 32,
    name: 'LAWN MOWER',
    image: 'MOWER.avif',
    price: 10500
  }
];

let listCards = [];

list.style.display = 'flex';
list.style.overflowY = 'auto';
list.style.maxHeight = '350px';

list2.style.display = 'flex';
list2.style.overflowY = 'auto';
list2.style.maxHeight = '350px';

list3.style.display = 'flex';
list3.style.overflowY = 'auto';
list3.style.maxHeight = '350px';

list4.style.display = 'flex';
list4.style.overflowY = 'auto';
list4.style.maxHeight = '350px';

list5.style.display = 'flex';
list5.style.overflowY = 'auto';
list5.style.maxHeight = '350px';

listCard.style.overflowY = 'auto';
listCard.style.maxHeight = '580px';

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
          <img src="${value.image}">
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });

  products2.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
          <img src="${value.image}">
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCard2(${key})">Add To Card</button>`;
    list2.appendChild(newDiv);
  });

  products3.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
          <img src="${value.image}">
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCard3(${key})">Add To Card</button>`;
    list3.appendChild(newDiv);
  });

  products4.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
          <img src="${value.image}">
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCard4(${key})">Add To Card</button>`;
    list4.appendChild(newDiv);
  });

  products5.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
          <img src="${value.image}">
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCard5(${key})">Add To Card</button>`;
    list5.appendChild(newDiv);
  });
}

initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}

function addToCard2(key) {
  if (listCards[products.length + key] == null) {
    // copy product form list2 to list card
    listCards[products.length + key] = JSON.parse(JSON.stringify(products2[key]));
    listCards[products.length + key].quantity = 1;
  }
  reloadCard();
}

function addToCard3(key) {
  if (listCards[products.length + products2.length + key] == null) {
    // copy product form list3 to list card
    listCards[products.length + products2.length + key] = JSON.parse(JSON.stringify(products3[key]));
    listCards[products.length + products2.length + key].quantity = 1;
  }
  reloadCard();
}

function addToCard4(key) {
  if (listCards[products.length + products2.length + products3.length + key] == null) {
    // copy product form list4 to list card
    listCards[products.length + products2.length + products3.length + key] = JSON.parse(JSON.stringify(products4[key]));
    listCards[products.length + products2.length + products3.length + key].quantity = 1;
  }
  reloadCard();
}

function addToCard5(key) {
  if (listCards[products.length + products2.length + products3.length + key] == null) {
    // copy product form list4 to list card
    listCards[products.length + products2.length + products3.length + products4.length +key] = JSON.parse(JSON.stringify(products4[key]));
    listCards[products.length + products2.length + products3.length + products4.length +key].quantity = 1;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
              <div><img src="${value.image}"/></div>
              <div>${value.name}</div>
              <div>${value.price.toLocaleString()}</div>
              <div>
                  <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                  <div class="count">${value.quantity}</div>
                  <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
              </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  total2.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

cartIcon.addEventListener('click', () => {
});