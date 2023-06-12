import {createContext, ReactNode, useState} from "react";

//UseState Cart Type
type CartItemType = {
  id: number;
  amount: number;
}

//Context Type
type ShoppingCartContextType = {

  getAmount: (id:number) => number;
  increaseAmount: (id:number) => void;
  decreaseAmount: (id:number) => void;
  deleteAmount: (id:number) => void;
  cartAmount: number;

}



export const ShoppingCartContext = createContext({} as 
  ShoppingCartContextType);

type ShoppingCartContextProps = {
    children: ReactNode;
}

//Provider
const ShoppingProvider = ({children}:ShoppingCartContextProps ) => {
  const [cartItems, setCartItems] = useState <CartItemType[]>([]);

  //Fixing the amount of the product
  const getAmount = (id: number) =>{
    return cartItems.find(item=> item.id===id)?.amount || 0;
  }

  //Product amount increment
  const increaseAmount = (id: number) =>{
    setCartItems(cartItems=>{
      if(cartItems.find(item => item.id === id)==null){
        return [...cartItems, {id, amount: 1}]
      }
      else{
        return cartItems.map(item=>{
          if(item.id===id){
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
  const decreaseAmount = (id: number) =>{
    setCartItems(cartItems=>{
      if(cartItems.find(item => item.id === id)?.amount == 1){
        return cartItems.filter(item => item.id !== id);
      }
      else{
        return cartItems.map(item=>{
          if(item.id===id){
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

  return (
    <ShoppingCartContext.Provider value={{ getAmount, increaseAmount, decreaseAmount, deleteAmount, cartAmount  }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingProvider
