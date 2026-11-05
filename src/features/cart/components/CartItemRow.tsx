import { formatCurrency } from "@/lib/format";
import type { CartItem } from "../types";

type CartItemRowProps = {
  item: CartItem;
  onRemove: (id: string) => void;
};

export const CartItemRow = ({ item, onRemove }: CartItemRowProps) => {
  return (
    <li className="flex items-start justify-between gap-4 px-5 py-4">
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-stone-900">
          {item.product.name}
        </p>
        <p className="mt-0.5 text-xs tabular-nums text-stone-500">
          {formatCurrency(item.product.price)} × {item.quantity}
        </p>
        <button
          type="button"
          onClick={() => onRemove(item.product.id)}
          className="mt-2 text-xs font-medium text-amber-800 underline-offset-2 hover:text-amber-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
        >
          Remove one
        </button>
      </div>
      <p className="shrink-0 text-sm font-medium tabular-nums text-stone-900">
        {formatCurrency(item.product.price * item.quantity)}
      </p>
    </li>
  );
};
