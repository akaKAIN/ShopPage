new Vue({
  el: '#menu',
  data() {
    return {
      options: [
        {id: 0, title: 'Главная', url: './index.html'},
        {id: 1, title: 'Каталог', url: './product.html'},
        {id: 2, title: 'Контакты', url: './contact.html'}
      ],
      activeId: 0
    }
  },
  template: ' <nav class="navbar navbar-dark bg-dark">\n' +
    '    <template v-for="option in options">\n' +
    '      <a class="navbar-brand" :href="option.url">{{ option.title }}</a>\n' +
    '    </template>\n' +
    '  </nav>',
  methods: {
    activeLink: function (event) {}
  }
})