import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    totalPrice: 0,
    changeCategory: 'all',
};


const CartSlice = createSlice({
    name: "Cart",
    initialState: initialState,
    reducers: {
        add(state, action) {
            const index = state.cartItems.findIndex((items) => {
                return items.id == action.payload.id;
            })

            if (index === -1) {
                const tempProducts = {
                    ...action.payload, quantity: 1
                }

                state.cartItems.push(tempProducts);
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            } else if (state.cartItems[index].quantity < 5) {
                state.cartItems[index].quantity += 1;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
        },

        remove(state, action) {
            const index = state.cartItems.findIndex((item) => {
                return item.id === action.payload
            })

            if (state.cartItems[index].quantity > 1) {
                state.cartItems[index].quantity -= 1
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            } else {
                const filterItems = state.cartItems.filter((items) => {
                    return items.id !== action.payload;
                })

                state.cartItems = filterItems;

                localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            }
        },

        categoryChange(state, action) {
            state.changeCategory = action.payload;
        }
    }
})

export const { add, remove, categoryChange } = CartSlice.actions;

export default CartSlice.reducer;