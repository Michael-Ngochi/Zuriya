import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { products } from "@/data";
import { Button } from "@/components/ui/button";
import { FaShoppingBasket } from "react-icons/fa";
import { addProductToCart } from "@/store/cartSlice"; // adjust path if different

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AddToCartButton from "@/components/AddToCartButton";

const IndividualProduct = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <p className="m-6 text-red-600">Sorry, product not found.</p>;
  }



  return (
    <>
      <Helmet>
        <title>{product.name} | Zuriya</title>
        <meta
          name="description"
          content={`Discover Zuriya's ${product.name}: ${product.shortDescription}. Dermatologically tested and crafted in Nairobi with plant-powered ingredients.`}
        />
        <link rel="canonical" href={`/products/${slug}`} />
      </Helmet>

      {/* Breadcrumb */}
      <Breadcrumb className="m-4">
        <BreadcrumbList className="text-xl">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <NavLink to="/products" className="hover:text-primary">
                Products
              </NavLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Product Section */}
      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div>
          <img
            src="https://placehold.co/600"
            alt={product.name}
            className="rounded-2xl shadow-md w-full object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-serif text-primary mb-3">
            {product.name}
          </h1>
          <p className="text-lg italic text-muted-foreground mb-4">
            {product.tagline}
          </p>
          <p className="mb-6">{product.fullDescription}</p>

          <p className="text-md mb-2">
            <strong>Size:</strong> {product.size}
          </p>
          <p className="text-md mb-6">
            <strong>Price:</strong> KES {product.price.toLocaleString()}
          </p>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Key Ingredients</h3>
            <ul className="list-disc list-inside">
              {product.keyIngredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Add to Cart */}
          <AddToCartButton item={product} type="product"/>

          {/* Trust signals */}
          <p className="text-sm text-muted-foreground mt-4">
            Dermatologically tested · Made in Nairobi · Plant-powered
          </p>
        </div>
      </section>

      {/* Showcase Section */}
      {product.showcaseImage && (
        <section className="container mx-auto px-6 py-12">
          <img
            src="https://placehold.co/1200x400"
            alt={`${product.name} showcase`}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </section>
      )}
    </>
  );
};

export default IndividualProduct;
