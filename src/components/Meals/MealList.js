import styles from './MealList.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: 'Ролл "Наоми"',
        description:
            "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
        price: 11.99,
    },
    {
        id: "m2",
        name: "Спайс в лососе",
        description: "Рис, лосось, соус спайс",
        price: 3.99,
    },
    {
        id: "m3",
        name: "Суши с угрем",
        description: "Угорь копченый, соус унаги, кунжут",
        price: 4.99,
    },
    {
        id: "m4",
        name: 'Салат "Поке с лососем"',
        description:
            "Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый",
        price: 7.99,
    },
];


const MealList = (props) => {
    const mealList = DUMMY_MEALS.map(meal => <MealItem name={meal.name} description={meal.description}
                                                       price={meal.price} key={meal.id}/>)

    return <section className={styles.meals}>
        <Card>
            <ul>
                {mealList}
            </ul>
        </Card>
    </section>
}

export default MealList;