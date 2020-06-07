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

Vue.component('card-product-small', {
  props: {
    link: String,
    name: String,
    description: String,
    imageLink: String
  },
  template: '<div class="card-product-small">\n' +
    '      <div class="card-body">\n' +
    '        <a class="menu-arrow white-btn" :href="link"></a>\n' +
    '        <div class="card-body-title">{{name}}</div>\n' +
    '        <div class="card-body-description">{{description}}</div>\n' +
    '      </div>\n' +
    '      <img class="card-image" :src="imageLink" alt="ProductImage">\n' +
    '    </div>'
});

new Vue({
  el: '#required-product-block',
  data () {
    return {
      productRequired: [
        {link: '#', name: 'Fishnet Chair', description: 'Seat and back with upholstery made of cold cure foam\n' +
            '. Steel frame, available in matt powder-coated black\n' +
            ' or highly polished chrome.', imageLink: './asserts/img/product-1.jpg'},
        {link: '#', name: 'Fish Kitchen', description: 'Some kind of fish shit', imageLink: './asserts/img/product-2.jpg'},
        {link: '#', name: 'Fishnet Nipples', description: 'Some kind of fish shit', imageLink: './asserts/img/product-3.jpg'},
        {link: '#', name: 'Fishnet Eye', description: 'Some kind of fish shit', imageLink: './asserts/img/product-4.jpg'}
      ]
    }
  }
});