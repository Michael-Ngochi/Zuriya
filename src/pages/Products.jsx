import ProductCard from "@/components/ProductCard";
import {React, useState} from "react";
import { products } from "@/data";
import aloe2 from "../../public/images/aloe2.png";
import { Drawer,
    DrawerContent,
    DrawerTrigger
 } from "@/components/ui/drawer";
import BundleRDrawer from "@/components/BundleDrawer";

const Products = () => {

    const [productList, setProductList] = useState(products);

  return (
    <>

{/* Banner */}
<div className="container overflow-clip relative bg-white mt-5 mx-auto px-6 py-10 rouded-2xl md:rounded-full text-center">
  <img className="absolute right-0 bottom-0 w-100 hidden lg:grid" src={aloe2} alt="" />
  <h2 className="text-3xl font-serif text-primary mb-4">Your Ritual, Your Glow</h2>
  
  <p className="text-lg text-green-950 font-bold mb-6">Not sure where to start? Explore our ritual bundles curated for every step of your day.</p>
  <Drawer>
  <DrawerTrigger className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-yellow-800 transition">
    View Ritual Bundles
  </DrawerTrigger>
  <DrawerContent>
    <BundleRDrawer />
  </DrawerContent>
  </Drawer>
</div>


<h1 className="text-center border-y-2 border-primary  my-5 mask-y-from-90% mx-10 md:mx-40 lg:mx-90 text-3xl font-serif text-primary">Our Products</h1>
{/* Products showcase */}
{/* <div className="flex mx-30 justify-center items-center"> */}
            
<div className="flex flex-wrap items-center justify-center">
{
productList.map((product)=>{
    return(
        <ProductCard key={product.id} productName={product.name} description={product.shortDescription} price={product.price} size={product.size} slug={product.slug} />
    )
})
}
</div>
{/* </div> */}


</>
)
}

export default Products;