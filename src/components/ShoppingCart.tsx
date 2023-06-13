import {useContext} from 'react';
import { ShoppingCartContext } from "../context/ShoppingCartContext";


type cartPropsType = {
    isCartOpen: boolean;
  }

  type CartItemType = {
    id: number;
    amount: number;
  }
  
const ShoppingCart = ({isCartOpen}:cartPropsType) => {
    const {closeCart, cartAmount, cartItems } = useContext(ShoppingCartContext);
    
  return (
    <div>
        <div className={`${isCartOpen?'right-[0]' : '-right-[100%]'} fixed h-[100vh] w-[100%] md:w-[45%] bg-slate-50  shadow-xl p-5 top-0 z-20 duration-500 `}>
            <div className="flex p-5 justify-between items-center">
                <p>Shopping Cart({cartAmount})</p>
                <p className="3xl font-bold cursor-pointer" onClick={closeCart}>X</p>
            </div>
            <div className="mt-5 px-5 flex flex-col w-[100%]">
                {
                    cartItems.map((item:CartItemType) =>{
                        return(
                            <div key={item.id} className="flex items-center justify-between max-w-[100%]">
                                <p>{item.id}</p>
                                <p>b</p>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart
