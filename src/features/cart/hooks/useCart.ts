import { useCallback, useMemo, useReducer } from "react";
import type { Product } from "@/features/products";
import type { CartItem } from "../types";
import { cartReducer } from "./cartReducer";

export const useCart = () => {
  const [items, dispatch] = useReducer(cartReducer, [] as CartItem[]);

  const addToCart = useCallback((product: Product) => {
    dispatch({ type: "ADD", product });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const totalQuantity = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () =>
      items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      ),
    [items],
  );

  return {
    items,
    addToCart,
    removeFromCart,
    clearCart,
    totalQuantity,
    totalPrice,
  };
};
