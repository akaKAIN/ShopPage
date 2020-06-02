new Vue({
    el: '#app',
    data() {
        return {
            counter: 0,
            allProducts: [
                {
                    id: 0,
                    title: 'Чудо в упаковке',
                    short_desc: 'Отличный товар со средней скоростью доставки',
                    ful_desc: 'Вам очень понравится этот стильный и удобный в использовании товар, поставляемый совершенно бесплатно.',
                    features: ['компактный', 'экологичный', 'практичный'],
                    url: 'asserts/img/big_package.jpg'
                },
                {
                    id: 1,
                    title: 'Малое Чудо в упаковке',
                    short_desc: 'Отличный товар с мнгновенонй коростью доставки',
                    ful_desc: 'Вас очень удивит содержимое, поставляемый совершенно бесплатно.',
                    features: ['аскетичный', 'экологичный', 'удобный', 'невесомый'],
                    url: 'asserts/img/package.jpg'
                },
                {
                    id: 2,
                    title: 'Множество чудес в упаковке',
                    short_desc: 'Вам очень понравится содержимое.',
                    ful_desc: 'Не нашли что-то необходимое сразу? - Откройте следующую, наверняка именно там то, что ВЫ ищите.',
                    features: ['всеобъемлющий', 'экологичный', 'самодостаточный', 'ни к чему не обязывающий'],
                    url: 'asserts/img/many_packages.jpg'
                }
            ]
        }
    },
    methods: {
        getValueNum: function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }

})