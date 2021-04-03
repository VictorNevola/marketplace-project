
interface product {
    name: string,
    oldPrice: number,
    newPrice: number,
    images: [string],
    ref: string
}

export interface ProductsInterface {
    products: [product],
    activeQuickCart: Function;
}