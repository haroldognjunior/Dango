import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../loader/Loader';
import Img from '../image/Image';
import { MathNumber } from '../tools/math/MathNumber';
import {
  productList,
  productCart,
  editProduct,
  quantityProduct
} from '../state/actions/productsReducers';
import Swal from 'sweetalert2';
import {
  FontSizeChange,
  FontSizeDecrease,
  FontSizeIncrease
} from '../tools/fontSizeChange/FontSizeChange';
import { FontIconDecrease } from './FontIconDecrease';
import { FontIconIncrease } from './FontIconIncrease';

const ProductsList: React.FC = () => {
  const ProductsData = useSelector((state: any) => state?.products?.products);
  const dispatch = useDispatch();
  const [fontSize, setFontSize] = useState(16);

  const fetchProducts = async () => {
    await axios.get('/db/products.json').then((res) => {
      dispatch(productList(res.data));
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    FontSizeChange(fontSize);
  }, [fontSize]);

  return (
    <>
      <div className='flex m-10 w-20 justify-evenly'>
        <div
          className='w-5'
          onClick={() => FontSizeDecrease(fontSize, setFontSize)}
        >
          <FontIconDecrease />
        </div>
        <div
          className='w-5'
          onClick={() => FontSizeIncrease(fontSize, setFontSize)}
        >
          <FontIconIncrease />
        </div>
      </div>

      {!ProductsData && ProductsData == undefined ? (
        <>
          <Loader />
        </>
      ) : (
        <div className='px-8 grid grid-cols-1 my-4 sm:grid-cols-2 sm:my-8 lg:grid-cols-4 lg:my-16 gap-4 justify-center justify-items-center'>
          {ProductsData.map((individualProductData: any) => {
            return (
              <div
                className='my-2 p-5 border-solid border-2 border-black w-60 xl:w-72'
                key={individualProductData.id}
              >
                <div className='m-auto flex justify-center min-h-img-card '>
                  <Img
                    src={individualProductData.photo}
                    width={150}
                    height={118}
                  />
                </div>
                <h1 className='my-2 product-title'>
                  {individualProductData.name}
                </h1>
                <input
                  name='name'
                  className='my-1 max-w-s-s sm:max-w-s-xs lg:max-w-xs bg-transparent p-0.5'
                  placeholder='edit product name here'
                  onChange={(e) =>
                    dispatch(
                      editProduct({
                        name: e.target.value,
                        id: individualProductData?.id
                      })
                    )
                  }
                />
                <div className='flex'>
                  <h2 className='mr-4 font-extrabold text-xl'>
                    {MathNumber(individualProductData.price)}
                  </h2>
                  <input
                    className='font-thin border border-black-600 w-12 text-center'
                    name='quantity'
                    type='number'
                    value={individualProductData.quantity}
                    onChange={(e) => {
                      if (parseInt(e.target.value) <= 0) {
                        Swal.fire({
                          title: "Action isn't allowed",
                          text: `You can't have less than 1 unit`,
                          icon: 'error',
                          confirmButtonText: 'Ok!'
                        });
                      } else {
                        dispatch(
                          quantityProduct({
                            quantity: e.target.value,
                            id: individualProductData?.id
                          })
                        );
                      }
                    }}
                  />
                </div>

                <h3 className='text-xs font-thin text-gray-500 my-4'>
                  {individualProductData.description}
                </h3>
                <div className='flex justify-center	justify-items-center flex-col	items-center'>
                  <button
                    className='outline outline-offset-2 bg-rose-light p-1'
                    onClick={() =>
                      dispatch(
                        productCart({
                          id: individualProductData.id,
                          name: individualProductData.name,
                          price: individualProductData.price,
                          photo: individualProductData.photo,
                          quantity: individualProductData.quantity
                        })
                      )
                    }
                  >
                    Add to cart
                  </button>
                  <p className='my-4 underline decoration-solid'>Learn More</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ProductsList;
