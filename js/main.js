const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';


const getRequest = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `${API}/catalog.json`, true) /// в ссылку что передать?
    xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status !== 200) {
      console.log('Error')
    } else {
      console.log(xhr.responseText)
    }

    };
    xhr.send();
 })
}

class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    //массив для хранения запрошенных ответов с сервера 
    this.goods = [];
    // массив объектов товаров 
    this.goodsObjects = [];
    //вызов методов
    this.fetchGods();
    this.render();
  }

  //метод, который суммирует стоимость всех товаров:
  getSum() {
    let sum = 0;
    for(let product of this.goodsObjects)  //product это каждый элемент массива 
    console.log(product)
    sum += ProductItem.price; //из каждого объекта берем ценну и суммируем ее 
  }

  //reduce используется для последовательной обработки каждого элемента массива с 
  //сохранением промежуточного результата.

  // метод, который берет эти данные 

  fetchGods() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 1000},
      {id: 2, title: 'Mouse', price: 100},
      {id: 3, title: 'Keyboard', price: 250},
      {id: 4, title: 'Gamepad', price: 150},
    ];
  }

  //метод, который отрисовывает 

  render() {
    const block = document.querySelector(this.container);

    for (const product of this.goods) {
      const productObject = new ProductItem(product);
      this.goodsObjects.push(productObject);
      //добавление в блок разметку, связанную с этим товаром
      block.insertAdjacentHTML('beforeend', productObject.getHTMLString())
    }
  }
};

class ProductItem {
  constructor(item, img='https://via.placeholder.com/150') {
    this.id = item.id;
    this.title = item.title;
    this.price = item.price;
    this.img = img;
  }

  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
    <img src="${this.img}" alt="Img">
    <div class="desc">
        <h3>${this.title}</h3>
        <p>${this.price} \u20bd</p>
        <button class="buy-btn">Купить</button>
    </div>
  </div>`;
  }
}


//Запуск создание экземпляра productsList
const catalog = new ProductsList();
catalog.render();
catalog.getSum();

class Basket {

  //добавить товар
  addGoods() {

  }
  //удалить товар
  removeGoods() {

  }

  //Поменять кол-во товара в корзине
  changeCount() {

  }

  //Отрисовать разметку товаров
  render() {

  }
}

class ElemBasket {
  render() {

  }
}




/* const products = [
  {id: 1, title: 'Notebook', price: 1000},
  {id: 2, title: 'Mouse', price: 100},
  {id: 3, title: 'Keyboard', price: 250},
  {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (item, img='https://via.placeholder.com/150') => {
  return `<div class="product-item" data-id="${item.id}">
            <img src="${img}" alt="Img">
            <div class="desc">
                <h3>${item.title}</h3>
                <p>${item.price} \u20bd</p>
                <button class="buy-btn">Купить</button>
            </div>
          </div>`;
};

const renderProducts = list => {
  document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
};
renderProducts(products); */



