new Vue ({
  el: '#footer-block',
  template: '<spam>{{message}} &copy;</spam>',
  data () {
    return {
      message: 'Все права защищены'
    }
  }
})