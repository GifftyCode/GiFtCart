import { CartCard } from '../components';
import { useTitle } from '../hooks/useTitle';

export const Cart = () => {
  useTitle('Cart');

  const products = [
    {
      id: 1,
      name: 'ZenithX Hi-Fi 360 Headphones',
      price: 149,
      image: '/assets/images/img1.jpg',
    },
    {
      id: 2,
      name: 'EchoPods BT200 Bluetooth Earphones',
      price: 49,
      image: '/assets/images/img2.jpg',
    },
  ];

  return (
    <main>
      <section className='cart'>
        <h1>Cart Items: {products.length}</h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
