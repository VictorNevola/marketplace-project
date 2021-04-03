
interface product {
    name: string,
    oldPrice: number,
    newPrice: number,
    images: [string]
}

export interface ProductsInterface {
    products: [product]
}