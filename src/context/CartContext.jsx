import { createContext,useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [count, setcount] = useState(0);
const addToCart = () => {
        setcount(count+1)
    }
    return <CartContext.Provider value={{ count, addToCart }}>{children}</CartContext.Provider>
}