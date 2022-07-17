import CartContext from "./cart-context";
import {useReducer} from "react";

const DEFAULT_CART_STATE = {
    items: [],
    totalAmount: 0
}

// Action мы передаем в коде, а стейт - последнее состояние передает реакт
const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.item); // concat в олтичие от push создаст новый объект массива, а не изменить старый
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
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