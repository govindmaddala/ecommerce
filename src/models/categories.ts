import electronics from '../assets/images/electronics.jpg';
import jewelry from '../assets/images/jewelry1.jpg';
import menClothing from '../assets/images/mensclothing.jpg';
import womenClothing from '../assets/images/womenClothing.jpg';

export const categories: string[] = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
]

export const categoriesObject = {
    "electronics":<categoryType> {
        imgUrl: electronics
    },
    "jewelery":<categoryType> {
        imgUrl: jewelry
    },
    "men's clothing":<categoryType> {
        imgUrl: menClothing
    },
    "women's clothing":<categoryType> {
        imgUrl: womenClothing
    }
}

interface categoryType{
    imgUrl: string
}