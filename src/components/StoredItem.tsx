
import {useContext} from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

  
  
const StoredItem = ({product}:any) => {

    const {id, title, price,  image} = product;

     
    const {getAmount, increaseAmount, decreaseAmount, deleteAmount } = useContext(ShoppingCartContext);

    //Amount Adding to the product
    const amount = getAmount(product);

  return (
    <div className="rounded-md flex flex-col p-2   border">
        <div className="cursor-pointer hover:p-4 h-[300px] p-8 duration-500">
            <img src={image} alt="" className="h-[100%] object-cover " />
        </div>
        <div className="">
            <span className=" text-[14px] cursor-pointer hover:underline">{title}</span>
        </div>
        <div className="my-3">
            <span className="font-bold">Price - ${price}</span>
        </div>
        <div className="w-[100%] flex justify-center">
            {
                //Adding product to the cart
               amount === 0?(<button onClick={()=>increaseAmount(product)} className=" block bg-red-500 w-[100%] text-white py-2 rounded-md shadow-md">Add to cart</button>): 
               (<div className=" flex items-center justify-around w-[100%]">
                    <div className="flex justify-around w-[50%]">
                        {/* amount decrement */}
                        <button onClick={()=>decreaseAmount(product)}  className=" w-[30px] text-white rounded-md bg-red-500 flex items-center justify-center">-</button>
                        <span>{amount}</span>
                        {/* amount decrement */}
                        <button onClick={()=>increaseAmount(product)} className="  w-[30px]  text-white rounded-md flex items-center bg-red-500 justify-center">+</button>
                    </div>
                    {/* delete amount*/}
                    <div onClick={()=>deleteAmount(id)} className="text-white rounded-md flex items-center bg-red-500 justify-center px-3 cursor-pointer">Remove</div>
               </div>)
            }
        </div>
    </div>
  )
}

export default StoredItem
