import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import ShoppingProvider from './context/ShoppingCartContext';

const App = () => {
  return (

    <div className=" max-w-[100%] ">
      <ShoppingProvider>

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/store" element={<Store></Store>}/>
        <Route path="/about" element={<About></About>}/>
      </Routes>
      </ShoppingProvider>
      
    </div>
  )
}

export default App;