import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart, addBundleToCart } from "@/store/cartSlice";
import { Button } from "@/components/ui/button";
import { FaShoppingBasket } from "react-icons/fa";
import { toast } from "sonner";

const AddToCartButton = ({ item, type = "product", className = "" }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (type === "product") {
      dispatch(addProductToCart(item));
      toast.success(`${item.name} added to cart`, {
        description: "You can view it in your cart.",
      });
    } else if (type === "bundle") {
      dispatch(addBundleToCart(item));
      toast.success(`${item.name} bundle added to cart`, {
        description: "Bundle items are now in your cart.",
      });
    } else {
      console.warn("Unknown cart item type:", type);
    }
  };

  return (
    <Button
      onClick={handleAdd}
      className={`flex items-center cursor-pointer gap-2 px-4 py-2 rounded-xl ${className}`}
    >
      <FaShoppingBasket />
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
