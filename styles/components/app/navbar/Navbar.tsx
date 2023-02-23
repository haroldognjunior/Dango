import React from 'react';
import { useSelector } from 'react-redux';
import { CartIcon } from './CartIcon';

export function Navbar(props: { toggleMenu: any }) {
  const CartData = useSelector((state: any) => state?.products?.cart);

  return (
    <nav className='bg-dark-blue flex items-center px-8 h-10'>
      <div className='grid grid-cols-12 w-full sm:p-5'>
        <div className='col-span-8 sm:col-span-10 lg:col-span-11'>
          <h1 className='text-white'>Dango Digital</h1>
        </div>
        <div
          className='flex col-span-4 sm:col-span-2 lg:col-span-1'
          onClick={props?.toggleMenu}
        >
          <CartIcon color={'fill-none stroke-white cursor-pointer '} />
          <p className='text-white px-5 cursor-pointer'>{CartData.length}</p>
        </div>
      </div>
    </nav>
  );
}
