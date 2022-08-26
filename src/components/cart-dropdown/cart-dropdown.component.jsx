import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.contexts';


import Button from '../button/button.component';

import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                
                cartItems.map((item) => (
                <CartItem key = {item.id} cartItem={item}/>
                ))
                ): (
                    <span className='empty-message'>Your cart is empty</span>
                )
            
            }
                </div>
                <Button>GO TO CHECK OUT</Button>                     
            </div>

       
    )

}

export default CartDropdown;