Vue.component('category-menu', {
  name: 'CategoryMenu',
  props: {
    categories: Array
  },
  template: '<div class="row">\n' +
    '        <div v-for="category in categories">\n' +
    '          <div class="menu-link-container bordered" :class="{ \'menu-active\' : category.isActive}">\n' +
    '            <a :href ="category.url">{{ category.title }}</a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>'
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
  {imageLink: './asserts/img/product-5.jpg', productLink: '#'},
  {imageLink: './asserts/img/product-6.jpg', productLink: '#'},
  {imageLink: './asserts/img/product-11.jpg', productLink: '#'},
  {imageLink: './asserts/img/product-21.jpg', productLink: '#'},
  {imageLink: './asserts/img/product-31.jpg', productLink: '#'},
  {imageLink: './asserts/img/product-41.jpg', productLink: '#'}
];

new Vue({
  el: '#products-block',
  data() {
    return {
      categories: [
        {title: 'all', url: '#', isActive: true},
        {title: 'HOME', url: '#', isActive: false},
        {title: 'OFFICE', url: '#', isActive: false},
        {title: 'FURNITURE', url: '#', isActive: false},
        {title: 'MODERN', url: '#', isActive: false},
        {title: 'CLASSIC', url: '#', isActive: false}
      ],
      products: productList
    }
  }
})