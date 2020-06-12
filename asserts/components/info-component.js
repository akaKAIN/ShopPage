Vue.component('info-component', {
  props: {
    title: String,
    item: String,
    description: String,
    btnText: String,
    btnTo: String
  },
  template: '<div class="info-component">' +
    '        <div class="info-title green">{{title}}</div>\n' +
    '        <div class="info-item">{{item}}</div>\n' +
    '        <div class="info-description">{{description}}</div>\n' +
    '        <a class="info-button white-btn" :href="btnTo">{{btnText}}</a>\n' +
    '        </div>'
});
new Vue({
  el: '#slider-text'
});