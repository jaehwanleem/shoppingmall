import Button from '../button/button.component';
import './product-card.styles.scss'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';


import product from '../../shop-data.json';

const ProductCard = ({product}) => {

    const {name, imageUrl, price} = product;

    const {addItemToCart} = useContext(CartContext)

    const addProductToCart = () => {addItemToCart(product)}

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`&{name}`}/>
            <div  className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>$ {price}</span>
                <Button buttonType='inverted' onClick = {addProductToCart}>Add to cart</Button>
            </div>

        </div>
    )

}

export default ProductCard;