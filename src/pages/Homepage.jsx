import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productsApi";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const Homepage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    staleTime: 5 * 60 * 1000 
  });

  useEffect(()=> {
   if(selectedProduct) {
    document.body.style.overflow = "hidden"
   } else {
    document.body.style.overflow = "auto"
   }
   return ()=> {
     document.body.style.overflow = "auto"
   }
  }, [selectedProduct])
  if (isLoading) return <h2>Loading.....</h2>;

  if (error) return <h2>Something went wrong</h2>;

  const products = data.data.products;
  return (
    <div className="container mt-4">
      <h2>Available Products</h2>
       {selectedProduct && <ProductModal product={selectedProduct} onClose={()=>setSelectedProduct(null)}/>}
      <div className="row">
        {products.map((p) => (
          <ProductCard key={p.id} data={p} onClick={()=>setSelectedProduct(p)}/>
        ))}
      </div>
     
    </div>
  );
};

export default Homepage;
