import { CartCard } from '../components';
import { useCart } from '../context/CartContext';
import { useTitle } from '../hooks/useTitle';

export const Cart = () => {
  const { total, cartList } = useCart();

  useTitle('Cart');

  // const products = [
  //   {
  //     id: 1,
  //     name: 'ZenithX Hi-Fi 360 Headphones',
  //     price: 149,
  //     image: '/assets/images/img1.jpg',
  //   },
  //   {
  //     id: 2,
  //     name: 'EchoPods BT200 Bluetooth Earphones',
  //     price: 49,
  //     image: '/assets/images/img2.jpg',
  //   },
  // ];

  return (
    <main>
      <section className='cart'>
        <h1>
          Cart Items: {cartList.length} / ${total}
        </h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
