new Vue({
  el: '#menu',
  data() {
    return {
      options: [
        {id: 0, title: 'Главная', url: './index.html'},
        {id: 1, title: 'Каталог', url: './catalog.html'},
        {id: 2, title: 'Продукты', url: './product.html'},
        {id: 3, title: 'Контакты', url: './contact.html'}
      ],
      activeId: 0
    }
  },
  template: ' <nav class="navbar navbar-dark bg-dark">\n' +
    '    <template v-for="option in options">\n' +
    '      <a class="navbar-brand" @mouseover="hoverLink" @mouseleave="unhoverLink" :href="option.url">{{ option.title }}</a>\n' +
    '    </template>\n' +
    '  </nav>',
  methods: {
    sleep: function (ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    hoverLink: async function(event) {
      event.target.style.padding = '0 0 0 0'
      console.log(event.target.style.fontSize = 'xx-large')
      event.target.style.color = 'red'
      await this.sleep(100)
      event.target.style.color = 'yellow'
      await this.sleep(100)
      event.target.style.color = 'white'
    },
    unhoverLink: function (event) {
      event.target.style.padding = '30px 30px 0 30px'
      event.target.style.fontSize = 'large'
      event.target.style.color = 'white'
    }
  }
})