Vue.component('title-menu', {
  props: {
    linkText: String,
    linkHref: String
  },
  template: '<div class="row d-flex justify-content-between">' +
    '         <div><slot></slot></div>' +
    '         <div><a class="menu-arrow" :href="linkHref">{{linkText}}</a></div>' +
    '        </div>'
});

Vue.component('card-product-image', {
  props: {
    link: String,
    imageLink: String
  },
  template: '<div class="card-image-medium">\n' +
    '          <a :href="link">\n' +
    '            <img class="card-image-medium" :src="imageLink" alt="TrendingProductImage">\n' +
    '          </a>\n' +
    '        </div>'
});
const productList = [
  {imageLink: './asserts/img/product-5.jpg', productLink: '#'},
  {imageLink: './asserts/img/product-6.jpg', productLink: '#'},
  {imageLink: './asserts/img/product-11.jpg', productLink: '#'},
  {imageLink: './asserts/img/product-21.jpg', productLink: '#'},
  {imageLink: './asserts/img/product-31.jpg', productLink: '#'},
  {imageLink: './asserts/img/product-41.jpg', productLink: '#'},
];

new Vue ({
  el: '#trend-product-block',
  data() {
    return {
      products: productList
    }
  }
});