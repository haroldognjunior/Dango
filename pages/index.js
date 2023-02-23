import React, { useEffect, useState } from 'react';
import { Navbar } from '../styles/components/app/navbar/Navbar';
import ProductsList from '../styles/components/app/products/Products';
import { Main } from '../styles/styles';
import { Cart } from '../styles/components/app/cart/Cart';
import { useRouter } from 'next/router';
import Seo from 'components/Seo';
import Footer from 'components/Footer';

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
