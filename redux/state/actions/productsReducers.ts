import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

const initialState: any = {
  products: [],
  cart: [],
  loading: true
};

const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productList(state, { payload }) {
      return { ...state, products: payload };
    },
    productCart(state, action) {
      state.cart.push(action.payload);
    },
    editProduct(state, action) {
      const { name, id } = action.payload;
      const existingProduct = state?.products.find(
        (product: any) => product.id === id
      );
      if (existingProduct) {
        existingProduct.name = name;
      }
    },
    quantityProduct(state, action) {
      const { quantity, id } = action.payload;
      const existingProduct = state?.products.find(
        (product: any) => product.id === id
      );
      if (existingProduct) {
        existingProduct.quantity = parseInt(quantity);
      }
    },
    moreProductCart(state, action) {
      const { quantity, id } = action.payload;
      const existingProduct = state.cart.find(
        (product: any) => product.id === id
      );
      if (existingProduct) {
        existingProduct.quantity = quantity + 1;
      }
    },
    lessProductCart(state, action) {
      const { quantity, id } = action.payload;
      const existingProduct = state.cart.find(
        (product: any) => product.id === id
      );
      if (existingProduct && quantity > 1) {
        existingProduct.quantity = quantity - 1;
      } else {
        Swal.fire({
          title: "Action isn't allowed",
          text: `You can't have less than 1 unit`,
          icon: 'error',
          confirmButtonText: 'Ok!'
        });
      }
    }
  }
});

export const {
  productList,
  productCart,
  moreProductCart,
  lessProductCart,
  editProduct,
  quantityProduct
} = productsReducer.actions;

export default productsReducer.reducer;
