Vue.component('compact-info', {
  props: {
    title: String,
    item: String,
    description: String,
    btnText: String,
    btnTo: String
  },
  template: '<div class="compact-info-component-inner">' +
    '        <div class="info-title blue">{{title}}</div>\n' +
    '        <div class="compact-info-item">{{item}}</div>\n' +
    '        <div class="card-body-description">{{description}}</div>\n' +
    '        <a class="info-button white-btn" :href="btnTo">{{btnText}}</a>\n' +
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
  el: '#mixin-product-block',
  data() {
    return {
      product:
        {
          imageLink: './asserts/img/product-1-lg.jpg',
          title: 'exclusive',
          item: 'Fishnet Chair',
          description: 'Seat and back with upholstery made of cold cure foam. Steel frame, available in matt\n' +
            ' powder-coated black\n' +
            ' or highly polished chrome.',
          link: '#'
        },
      productRequired: [
        {link: '#', name: 'Fishnet Chair', description: 'Seat and back with upholstery made of cold cure foam\n' +
            '. Steel frame, available in matt powder-coated black\n' +
            ' or highly polished chrome.', imageLink: './asserts/img/product-2-sm.jpg'},
        {link: '#', name: 'Fish Legs', description: 'Some kind of fish shit', imageLink: './asserts/img/product-3-sm.jpg'},
        {link: '#', name: 'Fishnet Nipples', description: 'Some kind of fish shit', imageLink: './asserts/img/product-4-sm.jpg'},
        {link: '#', name: 'Fishnet Eye', description: 'Some kind of fish shit', imageLink: './asserts/img/product-5-sm.jpg'}
      ]
    }
  }
});