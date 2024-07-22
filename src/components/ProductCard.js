import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  const { id, name, price, image } = product;

  useEffect(() => {
    // Retrieve cart items from local storage on component mount
    const storedCartList = JSON.parse(localStorage.getItem('cartList')) || [];
    const productIsInCart = storedCartList.find(
      (cartItem) => cartItem.id === id
    );
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [id]);

  useEffect(() => {
    // Save cart items to local storage whenever cartList changes
    localStorage.setItem('cartList', JSON.stringify(cartList));
  }, [cartList]);

  return (
    <div className='productCard'>
      <img src={image} alt={name} />
      <p className='name'>{name}</p>
      <div className='action'>
        <p>${price}</p>
        {isInCart ? (
          <button className='remove' onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
