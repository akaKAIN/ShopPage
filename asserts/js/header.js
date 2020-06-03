new Vue ({
  el: '#header-block',
  template: '<div class="row"><img src="asserts/img/magic-trick.svg" id="logo" alt="Логотип"><h1 id="logo-msg">{{ message }}</h1></div>',
  data () {
    return {
      message: 'Find your magic!'
    }
  }
})