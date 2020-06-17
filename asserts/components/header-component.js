new Vue({
  el: '#header',
  data() {
    return {
      titleSlogan: 'Our Products Range',
      menu: [
        {title: 'home', url: './index.html', isActive: false},
        {title: 'products', url: './products.html', isActive: true},
        {title: 'history', url: '#', isActive: false},
        {title: 'showroom', url: '#', isActive: false},
        {title: 'contact', url: './contacts.html', isActive: false}
      ]
    }
  }
})
