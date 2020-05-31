new Vue ({
  el: '#footer-block',
  template: '<span>{{message}} &copy;</span>',
  data () {
    return {
      message: 'Все права защищены'
    }
  }
})