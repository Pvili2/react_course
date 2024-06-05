import { createContext, useState, useReducer } from "react"
import { DUMMY_PRODUCTS } from '../dummy-products';

export const CartContext = createContext({
    items: [],
    onAddItemToCart: () => { },
    onUpdateCartItemQuantity: () => { }
});

function shoppingCartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            const updatedItems = [...state.items];

            const existingCartItemIndex = updatedItems.findIndex(
                (cartItem) => cartItem.id === id
            );
            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
                updatedItems.push({
                    id: action.payload,
                    name: product.title,
                    price: product.price,
                    quantity: 1,
                });
            }
            state = {
                items: updatedItems,
            }
            break;
        case "UPDATE_CART_QUANTITY":
            const updatedItems2 = [...state.items];
            const updatedItemIndex = updatedItems2.findIndex(
                (item) => item.id === action.payload.productId
            );

            const updatedItem = {
                ...updatedItems2[updatedItemIndex],
            };

            updatedItem.quantity += action.payload.amount;

            if (updatedItem.quantity <= 0) {
                updatedItems2.splice(updatedItemIndex, 1);
            } else {
                updatedItems2[updatedItemIndex] = updatedItem;
            }
            state = {
                items: updatedItems2,
            }
            break
        default:
            break;
    }
    return state;
}

export default function CartContextProvider({ children }) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
        items: []
    });
    function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: "ADD_ITEM",
            payload: id
        })
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type: "UPDATE_CART_QUANTITY",
            payload: { productId: productId, amount: amount }
        });

    }
    const ctxValue = {
        items: shoppingCartState.items,
        onAddItemToCart: handleAddItemToCart,
        onUpdateCartItemQuantity: handleUpdateCartItemQuantity
    }

    return (
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
    )
}