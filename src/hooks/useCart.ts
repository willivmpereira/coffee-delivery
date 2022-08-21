import { CartContext } from './../contexts/CartContext';
import { useContext } from "react"

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}