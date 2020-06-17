export class Product{

    static increment(): number {
       return ++this._id
    }
    private static _id: number = 0;
    id: number;
    name: string;
    shortDesc?: string;
    fullDesc?: string;
    url?: string;
    constructor(name: string, shortDesc: string = '', fullDesc: string = '', url: string = '') {
        this.id = Product.increment()
        this.name = name
        this.shortDesc = shortDesc
        this.fullDesc = fullDesc
        this.url = url
    }
}

const one = new Product('table', 'qweqwe')
const two = new Product('Sofa', 'sssooooooft')

console.log(one, two)