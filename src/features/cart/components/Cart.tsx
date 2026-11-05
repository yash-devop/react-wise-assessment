import type { CartItem } from "../types";
import { CartItemRow } from "./CartItemRow";

type CartProps = {
  items: CartItem[];
  onRemove: (id: string) => void;
};

export const Cart = ({ items, onRemove }: CartProps) => {
  if (items.length === 0) {
    return (
      <div className="px-5 py-10 text-center">
        <p className="text-sm font-medium text-stone-900">Your cart is empty</p>
        <p className="mt-1 text-xs text-stone-500">
          Add a plate from the catalog to get started.
        </p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-stone-200">
      {items.map((item) => (
        <CartItemRow key={item.product.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
};
