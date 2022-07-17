import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

function App() {

    const [cartIsVisible, setCartIsVisible] = useState(false)

    const showCartHandler = () => {
        setCartIsVisible(true);
    }

    const hideCartHandler = () => {
        setCartIsVisible(false);
    }

    return (
        // Оборачиваем в карт контекст провайдер, т.к. доступ нужен будет везде в дочерних
        <CartContextProvider>
            {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartContextProvider>
    );
}

export default App;
