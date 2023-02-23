import React, { useEffect, useState } from 'react';
import { Navbar } from 'components/navbar/Navbar';
import ProductsList from 'components/products/Products';
import { Cart } from 'components/cart/Cart';
import { useRouter } from 'next/router';
import Seo from 'components/seo';
import Footer from 'components/footer';

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  const router = useRouter();

  useEffect(() => {
    const closeMenu = () => isOpen && setOpen(false);
    router.events.on('routeChangeStart', closeMenu);
    return () => {
      router.events.off('routeChangeStart', closeMenu);
    };
  }, [isOpen, router]);

  return (
    <div className='container mx-auto max-w-layout-1440'>
      <Seo title={'Dango Digital'} />
      <Cart isOpen={isOpen} toggleMenu={toggleMenu} />
      <Navbar toggleMenu={toggleMenu} />
      <ProductsList />
      <Footer />
    </div>
  );
}
