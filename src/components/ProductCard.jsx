import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import AddToCartButton from "./AddToCartButton";
import { useState } from "react";
import { products } from "@/data";

const ProductCard = ({
    productId="product id",
    productName="Product Name",
    description="Product Description",
    price=500,
    size="product size",
slug="radiance-serum"}
    ) => {

    {/*find product for add to cart*/}
    const product = products.find((p) => p.id === productId);

    if (!product) {
        return <p className="m-6 text-red-600">Sorry, product not found.</p>;
      } 


    return(
        <>
         <div className="border-2 border-primary rounded-2xl w-90 m-4 overflow-clip">
            <div className="overflow-clip">
            <NavLink to={`/products/${slug}`} >
            <img className="transition-transform duration-300 ease-in-out hover:scale-110" src="https://placehold.co/600" alt="" />
            </NavLink>
            </div>
            <div className="flex flex-col bg-card text-card-foreground px-2 pt-2">
            <NavLink to={`/products/${slug}`} >
            <h2 className="hover:text-primary hover:underline text-2xl font-serif">{productName}</h2>
            <p className="text-muted-foreground">{description}</p>
            <span>{size}</span> <br />
            <span className="text-xl font-serif">Ksh {price}</span>
            </NavLink>
            <div className="flex gap-3 flex-row ">
            <AddToCartButton item={product} type="product"/>
            <NavLink to={`/products/${slug}`}><Button variant="link" className=" my-2 px-3 text-accent-foreground">Learn more</Button></NavLink>
            </div>
            </div>
        </div>
        </>
    )
}

export default ProductCard;