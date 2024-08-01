export interface productType {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: ratingType
}

export interface ratingType {
    rate: number,
    count: number
}