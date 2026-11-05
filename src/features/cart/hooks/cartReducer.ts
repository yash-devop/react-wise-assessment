import type { CartAction, CartItem } from "../types";

export const cartReducer = (
  state: CartItem[],
  action: CartAction,
): CartItem[] => {
  switch (action.type) {
    case "ADD": {
      const existing = state.find(
        (item) => item.product.id === action.product.id,
      );

      if (existing) {
        return state.map((item) =>
          item.product.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...state, { product: action.product, quantity: 1 }];
    }

    case "REMOVE": {
      return state
        .map((item) =>
          item.product.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
    }

    case "CLEAR":
      return [];

    default:
      return state;
  }
};
