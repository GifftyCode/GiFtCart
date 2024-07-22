import { ProductCard } from '../components/ProductCard';
import { useTitle } from '../hooks/useTitle';

export const Home = ({ img, desc, price }) => {
  useTitle('Home');

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
    {
      id: 3,
      name: 'AeroBass GX700 Gaming Headset',
      price: 179,
      image: '/assets/images/img3.jpg',
    },
    {
      id: 4,
      name: 'TitanTech Sport SE600 Earphones',
      price: 39,
      image: '/assets/images/img4.jpg',
    },
    {
      id: 5,
      name: 'SonicSurge X300 Wireless Headphones',
      price: 199,
      image: '/assets/images/img5.jpg',
    },
    {
      id: 6,
      name: 'PulseBeat Pro 500 Noise-Canceling',
      price: 29,
      image: '/assets/images/img6.jpg',
    },
  ];

  return (
    <main>
      <section className='products'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
