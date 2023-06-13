import {useContext} from 'react';
import { ShoppingCartContext } from "../context/ShoppingCartContext";


type cartPropsType = {
    isCartOpen: boolean;
  }
const ShoppingCart = ({isCartOpen}:cartPropsType) => {
    const {closeCart, cartItems, openCart} = useContext(ShoppingCartContext);
  return (
    <div>
        <div className={`${isCartOpen?'right-[0]' : '-right-[100%]'} absolute h-[100vh] w-[100%] md:w-[35%] bg-slate-50  shadow-xl p-5 top-0 z-100 duration-500 `}>
            <div className="flex p-5 justify-between items-center">
                <p>Shopping Cart</p>
                <p onClick={closeCart}>X</p>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart