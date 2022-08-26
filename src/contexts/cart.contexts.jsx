import { createContext, useState, useEffect  } from "react";


export const CartContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: () => {},
        cartItems: [],
        addItemToCart: () => {},
        cartCount: 0 ,
        
    }
)


// 장바구니에서 카트아이템의 수량을 계속 기억하면서 수량을 계속 올려줄수 있도록하는것 
const addCartItem = (cartItems, productToAdd) => {
    //cartItems 에 productToAdd 가 포함되는지 알아보기 ( 결과값 boolean 으로 나옴)
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id) 

    if(existingCartItem) {
        return(
            cartItems.map((cartItem) => cartItem.id === productToAdd.id  //cartItem id 랑 productToAdd id 랑 같으면 갯수를 추가한다. 
            ? {...cartItem, quantity: cartItem.quantity +1}
            : cartItem
             )
        )
    }

    return (
    [
        ...cartItems,
        {...productToAdd , quantity:1}
    ]
    )
}



export const CartProvider = ({children}) => {
    
    const [isCartOpen,setIsCartOpen] = useState(false); //앞의 값 전부 false로 설정 
    const [cartItems,setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {  //cartItems 가 바뀔때마다 다시 숫자를 세어줘야하기 때문에 useEffect 함수를 이용하여 알아낸다 

        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity //(callback, currentvalues) 이런 구조로 reduce 함수에 들어간다

        , 0 ) //기본 시작값은 o 

        setCartCount(newCartCount);

    }, [cartItems])
    

    const addItemToCart = (productToAdd) => { //프로덕트 카드에서 addtocart 클릭시 장바구니로 이동되는 펑션 
        setCartItems(addCartItem(cartItems,productToAdd));

    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};
return ( 
<CartContext.Provider value={value}>{children}</CartContext.Provider>
)


}