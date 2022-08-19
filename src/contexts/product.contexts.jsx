import { createContext } from "react";

import { useState } from "react";

import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext({
    products: [], 

});



export const ProductsProvider = ({children}) => { //프로바이더로 감싸는거 복습 

    const [products, setProducts] = useState(PRODUCTS)

    const value = {products};

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}