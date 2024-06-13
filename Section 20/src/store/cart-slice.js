import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: { cartShowing: true, items: [{ title: 'Test Item', quantity: 3, total: 18, price: 6 }], notifications: null },
    reducers: {
        isShowing(state) {
            state.cartShowing = !state.cartShowing
        },
        showNotifications(state, action) {
            state.notifications = { status: action.payload.status, title: action.payload.title, message: action.payload.message }
        },
        addCart(state, action) {
            const checkSame = state.items.findIndex(item => item.title === action.payload.item.title);
            console.log(checkSame);
            if (checkSame > -1) {
                let helper = state.items[checkSame]
                state.items[checkSame] = { title: helper.title, quantity: helper.quantity + 1, total: helper.total + helper.price, price: helper.price }
            } else {
                state.items.push({ title: action.payload.item.title, quantity: 1, total: action.payload.item.price, price: action.payload.item.price })
            }
        },
        decreaseQuantity(state, action) {
            const checkSame = state.items.findIndex(item => item.title === action.payload.item.title);
            state.items[checkSame] = { ...state.items[checkSame], quantity: state.items[checkSame].quantity - 1, total: (state.items[checkSame].quantity - 1) * state.items[checkSame].price }
            if (state.items[checkSame].quantity === 0) {
                state.items.splice(checkSame, 1);
            }
        },
        increaseQuantity(state, action) {
            const checkSame = state.items.findIndex(item => item.title === action.payload.item.title);
            state.items[checkSame] = { ...state.items[checkSame], quantity: state.items[checkSame].quantity + 1, total: (state.items[checkSame].quantity + 1) * state.items[checkSame].price }
        },
        fetchCartData(state, action) {
            state.items = action.payload.items
        }
    }
})
export const actions = cart.actions;

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(actions.showNotifications({
            status: "pendig",
            title: "Sending...",
            message: "Sending card data"
        }))

        const sendRequest = async () => {
            const response = await fetch('https://react-course-2304c-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })
            if (!response.ok) {
                throw new Error("Failed to send card data!")
            }
        }
        try {
            await sendRequest()
            dispatch(actions.showNotifications({
                status: "success",
                title: "Success!",
                message: "Sent card data successfully"
            }))
        } catch (error) {
            dispatch(actions.showNotifications({ status: "error", title: "Error", message: "Failed to fetch cart data" }))
        }
    }
}

export const fetchCartData = () => {
    return async (dispatch) => {
        dispatch(actions.showNotifications({
            status: "pendig",
            title: "Sending...",
            message: "Sending card data"
        }))
        const sendRequest = async () => {
            const response = await fetch('https://react-course-2304c-default-rtdb.europe-west1.firebasedatabase.app/cart.json')
            if (!response.ok) {
                throw new Error("Failed to fetch cart data!")
            }

            const resData = await response.json();
            console.log(resData)
            return resData;
        }

        try {
            const data = await sendRequest();
            dispatch(actions.showNotifications({
                status: "success",
                title: "Success!",
                message: "Sent card data successfully"
            }))
            dispatch(actions.fetchCartData({ items: data.items || [] }))
        } catch (error) {
            dispatch(actions.showNotifications({ status: "error", title: "Error", message: "Failed to fetch cart data" }))
        }
    }
}

export default cart.reducer;