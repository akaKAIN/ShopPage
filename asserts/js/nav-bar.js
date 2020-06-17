new Vue({
    el: '#nav-bar',
    data () {
        return {
            menu: [
                {title: 'home', url: './index.html', isActive: true},
                {title: 'products', url: './products.html', isActive: false},
                {title: 'history', url: '#', isActive: false},
                {title: 'showroom', url: '#', isActive: false},
                {title: 'contact', url: './contacts.html', isActive: false}
            ]
        }
    }
})
