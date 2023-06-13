import {Link} from 'react-router-dom';
import {BsFillCartFill} from 'react-icons/bs';
import {useContext} from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
const Navbar = () => {
  const {cartAmount, openCart} = useContext(ShoppingCartContext)
  return (
    <nav className="lg mb-3 container mx-auto bg-white shadow-xl p-4 sticky top-0">
        <div className="flex items-center justify-center space-x-16 text-xl uppercase">
           <Link className="hover:text-red-500" to="/" >Home</Link>
           <Link className="hover:text-red-500" to="/store">Store</Link>
           <Link className="hover:text-red-500" to="/about">About</Link>
           <div onClick={openCart} className="cursor-pointer flex relative group">
            
            <BsFillCartFill  className="text-3xl group-hover:text-red-500"></BsFillCartFill>
                <div className="absolute shadow-xl bg-red-500 h-[20px] w-[20px] -right-2 -bottom-2 rounded-full flex justify-center items-center text-[12px] text-white group-hover:text-red-500 group-hover:bg-black font-bold">
                    {cartAmount}
                </div>
           </div>
        </div>


    </nav> 
    
  )
}

export default Navbar
