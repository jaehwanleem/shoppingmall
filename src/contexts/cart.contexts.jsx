import { createContext, useState  } from "react";


export const CartContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: () => {},
    }
)

export const CartProvider = ({children}) => {
    
    const [isCartOpen,setIsCartOpen] = useState(false); //앞의 값 전부 false로 설정 
    const value = {isCartOpen, setIsCartOpen};

return ( 
<CartContext.Provider value={value}>{children}</CartContext.Provider>
)


}