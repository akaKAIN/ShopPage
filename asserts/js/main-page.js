"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = (function () {
    function Product(name, shortDesc, fullDesc, url) {
        if (shortDesc === void 0) { shortDesc = ''; }
        if (fullDesc === void 0) { fullDesc = ''; }
        if (url === void 0) { url = ''; }
        this.id = Product.increment();
        this.name = name;
        this.shortDesc = shortDesc;
        this.fullDesc = fullDesc;
        this.url = url;
    }
    Product.increment = function () {
        return ++this._id;
    };
    Product._id = 0;
    return Product;
}());
exports.Product = Product;
var one = new Product('FishShit', 'desc');
var two = new Product('Chiar', 'fullDesc');
console.log(one, two);
