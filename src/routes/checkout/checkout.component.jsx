import './checkout.styles.scss'

import { useContext } from 'react'  //리액트의 어떤 hook 가 필요한지 항상 먼저 생각하고 import 한다 

import { CartContext} from '../../contexts/cart.contexts'





const Checkout = () => {

    const {cartItems, addItemToCart} = useContext(CartContext)

   
    return( 
    
            <div> 
        
            <h1>Checkout page</h1>
            <div> {
                cartItems.map((cartItem) => {
                    const {id, name, quantity} = cartItem;

                    return(
                        <div key = {id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <br/>
                            <span>decrement</span>
                            <br/>
                            <span onClick={() => addItemToCart(cartItem)}>increment</span>
                            </div>
                    )

                })
                }
            </div>

            </div>
       
    )
}

export default Checkout