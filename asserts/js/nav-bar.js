new Vue({
    el: '#nav-bar',
    data () {
        return {
            menu: [
                {title: 'home', url: '#', isActive: true},
                {title: 'products', url: '#', isActive: false},
                {title: 'history', url: '#', isActive: false},
                {title: 'showroom', url: '#', isActive: false},
                {title: 'contact', url: '#', isActive: false}
            ]
        }
    }
})