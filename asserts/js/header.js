new Vue ({
  el: '#header-block',
  template: '<div class="row"><img src="asserts/img/magic-trick.svg" id="logo" alt="Логотип"><h1>{{ message }}</h1></div>',
  data () {
    return {
      message: 'Be a sure and dont be sucks, find your magic in the box!'
    }
  }
})