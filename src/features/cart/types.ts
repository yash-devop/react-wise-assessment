import type { Product } from "@/features/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartAction =
  | { type: "ADD"; product: Product }
  | { type: "REMOVE"; id: string }
  | { type: "CLEAR" };
