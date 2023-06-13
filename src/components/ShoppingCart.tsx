import {useContext} from 'react';
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { StoredItemType } from "../types/storeDataTypes";

type cartPropsType = {
    isCartOpen: boolean;
  }


  
const ShoppingCart = ({isCartOpen}:cartPropsType) => {
    const {closeCart, cartAmount, cartItems, deleteAmount } = useContext(ShoppingCartContext);
    
  return (
    <div>
        <div className={`${isCartOpen?'right-[0]' : '-right-[100%]'} fixed h-[100vh] w-[100%] md:w-[45%] bg-white  shadow-xl p-5 top-0 z-20 duration-500 overflow-auto  `}>
            <div className="flex p-5 justify-between items-center">
                <p>Shopping Cart({cartAmount})</p>
                <p className="3xl font-bold cursor-pointer" onClick={closeCart}>X</p>
            </div>
            <div className="mt-5 px-5 flex flex-col w-[100%]">
                {
                    cartItems.map((item:StoredItemType) =>{
                        return(
                            <div key={item.id} className="flex items-center  max-w-[100%] space-x-10">
                                <div className="h-[80px] m-5 w-[20%]">
                                    <img src={item.image} alt="" className="h-[100%] object-cover" />
                                </div>
                                <p className='w-[60%]'>{item.title}</p>
                                <p className='w-[10%]'>{item.price}</p>
                                <p className="3xl font-bold cursor-pointer w-[10%]" onClick={()=>deleteAmount(item.id)}>X</p>
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
