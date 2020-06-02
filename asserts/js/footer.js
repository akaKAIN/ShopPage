new Vue ({
  el: '#footer-block',
  template: '<span>{{message}} &copy; {{ getFullYear() }}</span>',
  data () {
    return {
      message: 'Все права защищены'
    }
  },
  methods: {
    getFullYear: function() {
      return new Date().getFullYear()
    }
  }
})