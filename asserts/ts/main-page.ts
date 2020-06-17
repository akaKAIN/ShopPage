export class Product {

    static increment(): number {
        return ++this._id
    }

    private static _id: number = 0;
    id: number;
    name: string;
    url?: string;
    shortDesc?: string;
    fullDesc?: string;

    constructor(name: string, url: string = '', shortDesc: string = '', fullDesc: string = '') {
        this.id = Product.increment()
        this.name = name
        this.url = url
        this.shortDesc = shortDesc
        this.fullDesc = fullDesc
    }
}

const one = new Product('table', 'qweqwe')
const two = new Product('Sofa', 'sssooooooft')

console.log(one, two)
