import styles from './Cart.module.css';
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {

    const cartContext = useContext(CartContext);

    const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1})
    }

    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id);
    }

    // Преконфигурация с помощью bind
    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartContext.items.map(item =>
                <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
                          onAdd={addCartItemHandler.bind(null, item)}
                          onRemove={removeCartItemHandler.bind(null, item.id)}
                />)}
        </ul>
    );

    return <Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Итого</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onHideCart}>Закрыть</button>
            {hasItems && <button className={styles.button}>Заказать</button>}
        </div>
    </Modal>
}

export default Cart;