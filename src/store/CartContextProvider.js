import CartContext from "./cart-context";
import {useReducer} from "react";

const DEFAULT_CART_STATE = {
    items: [],
    totalAmount: 0
}

// Action мы передаем в коде, а стейт - последнее состояние передает реакт
const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItem;
        let updatedItems;

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItem = {
                ...action.item
            }
            updatedItems = state.items.concat(updatedItem); // concat в отличие от push создаст новый объект массива, а не изменить старый
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return DEFAULT_CART_STATE;
}

const CartContextProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, DEFAULT_CART_STATE);

    const addItemHandler = (item) => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item: item
        })
    }
    const removeItemHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartContextProvider;