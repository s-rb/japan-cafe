import styles from './Cart.module.css';
import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartItems = (
        <ul className={styles['cart-items']}>
            {[{id: 'm1', name: 'Sushi', price: 10.99}].map(item =>
                <li>{item.name}</li>)}
        </ul>
        );

    return <Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Итого</span>
            <span>49.99</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onHideCart}>Закрыть</button>
            <button className={styles.button}>Заказать</button>
        </div>
    </Modal>
}

export default Cart;