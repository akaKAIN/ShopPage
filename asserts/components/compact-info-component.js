Vue.component('compact-info', {
  props: {
    title: String,
    item: String,
    description: String,
    btnText: String,
    btnTo: String
  },
  template: '<div class="compact-info-component">' +
    '        <div class="info-title blue">{{title}}</div>\n' +
    '        <div class="compact-info-item">{{item}}</div>\n' +
    '        <div class="compact-info-description">{{description}}</div>\n' +
    '        <a class="info-button white-btn" :href="btnTo">{{btnText}}</a>\n' +
    '        </div>'
});
new Vue({
  el: '#two-exclusive-product',
  data () {
    return {
      products: [
        {imageLink: './asserts/img/promo-img.jpg', title: 'exclusive', item: 'Fishnet Chair', description: 'Seat and back with upholstery made of cold cure foam. Steel frame, available in matt\n' +
            ' powder-coated black\n' +
            ' or highly polished chrome.', link: '#'},
        {imageLink: './asserts/img/promo-img1.jpg', title: 'exclusive', item: 'Fishnet Chair2', description: 'Seat and back with upholstery made of cold cure foam. Steel frame, available in matt\n' +
            ' powder-coated black\n' +
            ' or highly polished chrome.', link: '#'},
      ]
    }
  }
});