import { useEffect, useState } from "react";
import StoredItem from "../components/StoredItem";


const Store = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const productList = async()=>{
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();
      setProducts(data);
    }
    productList();
  },[]);
  
  const catProd = products.filter(product =>{
    return product.category === "men's clothing" || product.category === "women's clothing";
  })
  return (
    <div className="container mx-auto max-w-[1260px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10">
      {
        catProd.map(product=>{
          
          return (
              <StoredItem key={product.id} product={product} />
          )
        })
      }
    </div>
  )
}

export default Store