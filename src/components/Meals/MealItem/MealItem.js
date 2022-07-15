import styles from './MealItem.module.css';

const MealItem = (props) => {

    const formattedPrice = `$${props.price.toFixed(2)}`; // 2 знака после запятой

    return <li className={styles.meal}>
        <div>
            <h3>
                {props.name}
            </h3>
            <div className={styles.description}>
                {props.description}
            </div>
            <div className={styles.price}>
                {formattedPrice}
            </div>
        </div>
        <div>

        </div>
    </li>
}

export default MealItem;