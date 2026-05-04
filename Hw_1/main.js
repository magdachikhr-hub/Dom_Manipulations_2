const products = [
  {
    id: 1,
    image: "./images/product-1.avif",
    name: "Wireless Bluetooth Headphones",
    price: 220,
    category: "Audio",
    brand: "Sony",
  },
  {
    id: 2,
    image: "./images/product-2.jpg",
    name: "Mechanical Gaming Keyboard",
    price: 150,
    category: "Accessories",
    brand: "Logitech",
  },
  {
    id: 3,
    image: "./images/product-3.jpg",
    name: "4K Ultra HD Monitor",
    price: 480,
    category: "Display",
    brand: "Samsung",
  },
  {
    id: 4,
    image: "./images/product-4.jpg",
    name: "Wireless Mouse",
    price: 60,
    category: "Accessories",
    brand: "Razer",
  },
  {
    id: 5,
    image: "./images/product-5.jpg",
    name: "Portable External SSD 1TB",
    price: 200,
    category: "Storage",
    brand: "SanDisk",
  },
];

const itemsHtml = document.querySelector(".items");
const filterButton = document.querySelector(".filter_btn");
const resetButton = document.querySelector(".reset");

function render(array) {
  itemsHtml.innerHTML = "";
  array.forEach((item) => {
    itemsHtml.innerHTML += ` <div class="card">
  <div class="brand_category">
        <span class="category">${item.category}</span>
        <p class="brand">${item.brand}</p>
        </div>
        <img  class="product_img" src="${item.image}" alt="" />
        <div class="name_price">
          <p class="name">${item.name}</p>
          <span class="price">$${item.price}</span>
        </div>
    
         <button class="add_btn" name='${item.id}'>add to cart</button>
      </div>`;
  });
}
render(products);

filterButton.addEventListener("click", () => {
  const filteredArray = products.filter((product) => {
    return product.price < 200;
  });
  render(filteredArray);
});

resetButton.addEventListener("click", () => {
  render(products);
});
