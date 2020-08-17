import CartActionTypes from './cart.types';
import { addToCart, removeFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden // convert to the opposite
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.id !== action.payload.id
        )
      }
    default: 
      return state;
  }
}

export default cartReducer;