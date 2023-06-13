import {createContext, ReactNode, useState} from "react";
import ShoppingCart from "../components/ShoppingCart";
import { StoredItemType } from "../types/storeDataTypes";

interface amount extends StoredItemType {
  amount: number;
} 


//Context Type
type ShoppingCartContextType = {
  openCart:()=> void;
  closeCart:() => void;
  getAmount: (product:StoredItemType) => number;
  increaseAmount: (product:StoredItemType) => void;
  decreaseAmount: (product:StoredItemType) => void;
  deleteAmount: (id:number) => void;
  cartAmount: number;
  cartItems: Array<StoredItemType>;
}


export const ShoppingCartContext = createContext({} as 
  ShoppingCartContextType);

type ShoppingCartContextProps = {
    children: ReactNode;
}

//Provider
const ShoppingProvider = ({children}:ShoppingCartContextProps ) => {
  const [cartItems, setCartItems] = useState <amount[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  //Fixing the amount of the product
  const getAmount = (product: StoredItemType) =>{
    return cartItems.find(item=> item.id===product.id)?.amount || 0;
  }

  //Product amount increment
  const increaseAmount = (product:StoredItemType) =>{
    setCartItems(cartItems=>{
      if(cartItems.find(item => item.id === product.id)==null){
        return [...cartItems, {...product, amount: 1}]
      }
      else{
        return cartItems.map(item=>{
          if(item.id===product.id){
            return {...item, amount: item.amount+1}
          }
          else{
            return item;
          }
        })
      }
    })
  }

  //Product Amount Decrement
  const decreaseAmount = (product:StoredItemType) =>{
    setCartItems(cartItems=>{
      if(cartItems.find(item => item.id === product.id)?.amount == 1){
        return cartItems.filter(item => item.id !== product.id);
      }
      else{
        return cartItems.map(item=>{
          if(item.id===product.id){
            return {...item, amount: item.amount-1}
          }
          else{
            return item;
          }
        })
      }
    })
  }

  //Deleteing product from the cart
  const deleteAmount = (id:number) =>{
    setCartItems(cartItems=>{
      return cartItems.filter(item=> item.id !==id);
    })
  }
  const cartAmount = cartItems.reduce((qty, item) => {
    return item.amount + qty;
  }, 0);
  const openCart = () => {
    setIsCartOpen(true);
  }
  const closeCart = () =>{
    setIsCartOpen(false)
  }
 
  return (
    <ShoppingCartContext.Provider value={{ getAmount, increaseAmount, decreaseAmount, deleteAmount, cartAmount, openCart, closeCart, cartItems }}>
        {children}
        <ShoppingCart isCartOpen={isCartOpen}/>
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingProvider
