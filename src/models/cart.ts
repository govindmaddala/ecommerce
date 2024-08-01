export interface cart {
    id: number,
    userId: number,
    date: string,
    products: productType[],
    __v: number
}

interface productType {
    productId: number,
    quantity: number
}
