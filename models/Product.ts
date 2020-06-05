export class Product {
    title: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    imageURL: string;

    constructor(
        title: string,
        shortDescription: string,
        fullDescription: string,
        features: string[],
        imageURL: string
    ) {
        this.title = title
        this.shortDescription = shortDescription
        this.fullDescription = fullDescription
        this.features = features
        this.imageURL = imageURL
    }
    sayHi (): string {
        return 'hi'
    }
}
