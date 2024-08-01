import React, { useEffect, useState } from 'react'
import redirectURL from '../../http/redirectURL'
import { productType } from '../../models/products'

const Products: React.FC = () => {
    const [allProducts, setAllProducts] = useState<productType[]>([])
    useEffect(() => {
        redirectURL.get("/products").then((resp) => {
            setAllProducts(resp.data);
        }).catch((err) => {
            console.log(err)
        })

    }, [])
    return (
        <div>
            {
                allProducts.map((each) => {
                    return <div>
                        {each.id}
                    </div>
                })
            }
        </div>
    )
}

export default Products
