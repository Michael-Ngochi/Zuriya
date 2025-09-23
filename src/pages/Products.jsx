import ProductCard from "@/components/ProductCard";
import {React, useState} from "react";
import { products } from "@/data";


const Products = () => {

    const [productList, setProductList] = useState(products);

  return (
    <>
        <h1 className="text-center text-4xl font-serif text-primary">Our Products</h1>

{/* Banner */}
<div className="container bg-white mx-auto px-6 py-16">
</div>

{/* Products showcase */}
<div className="flex flex-wrap justify-center">
{
productList.map((product)=>{
    return(
        <ProductCard key={product.id} productName={product.name} description={product.shortDescription} price={product.price} size={product.size} slug={product.slug} />
    )
})
}
</div>
</>
)
}

export default Products;