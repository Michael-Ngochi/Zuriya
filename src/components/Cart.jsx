import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "@/store/cartSlice";
import { Button } from "@/components/ui/button";
import { FaTrash, FaPlus, FaMinus, FaShoppingBasket } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-serif text-primary mb-2">
          Your cart is empty
        </h2>
        <p className="text-sm text-muted-foreground">
          Explore our{" "}
          <span className="font-semibold">products</span> and{" "}
          <span className="font-semibold">ritual bundles</span> to begin your
          Zuriya journey.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b">
        <h2 className="text-2xl font-serif text-primary flex items-center gap-2">
          <FaShoppingBasket /> Your Cart
        </h2>
      </div>

      {/* Scrollable items */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {items.map((item) => (
          <div
            key={`${item.type}-${item.id}`}
            className="flex flex-col items-center justify-between border-b border-zinc-600 pb-1"
          >
            {/* Item info */}
            <div className="flex flex-col items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="  rounded-lg shadow"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-xs text-muted-foreground italic">
                  {item.type === "bundle" ? "Bundle" : "Product"}
                </p>
                <p className="text-sm">KES {item.price.toLocaleString()}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() =>
                  dispatch(decreaseQuantity({ id: item.id, type: item.type }))
                }
              >
                <FaMinus />
              </Button>
              <span className="px-2">{item.quantity}</span>
              <Button
                size="icon"
                variant="outline"
                onClick={() =>
                  dispatch(increaseQuantity({ id: item.id, type: item.type }))
                }
              >
                <FaPlus />
              </Button>
            </div>

            {/* Remove */}
            <Button
              size="icon"
              variant="ghost"
              className="text-red-800"
              onClick={() =>
                dispatch(removeFromCart({ id: item.id, type: item.type }))
              }
            >
              <FaTrash />
            </Button>
          </div>
        ))}
      </div>

      {/* Sticky footer */}
      <div className="border-t p-6 bg-background">
        <div className="flex justify-between mb-4">
          <p className="text-sm">
            <strong>Total Items:</strong> {totalItems}
          </p>
          <p className="text-lg font-serif">
            KES {totalPrice.toLocaleString()}
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => dispatch(clearCart())}
          >
            Clear
          </Button>
          <Button className="flex-1 bg-primary text-white rounded-xl">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
