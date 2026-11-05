import { formatCurrency } from "@/lib/format";
import type { Product } from "../types";

type ProductRowProps = {
  product: Product;
  onAdd: (product: Product) => void;
};

export const ProductRow = ({ product, onAdd }: ProductRowProps) => {
  return (
    <li className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <h3 className="text-sm font-medium text-stone-900 sm:text-base">
          {product.name}
        </h3>
        <p className="mt-0.5 text-sm tabular-nums text-stone-500">
          {formatCurrency(product.price)}{" "}
          <span className="text-stone-500">per plate</span>
        </p>
      </div>
      <button
        type="button"
        onClick={() => onAdd(product)}
        className="shrink-0 self-start rounded-md bg-amber-800 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 sm:self-auto"
      >
        Add to cart
      </button>
    </li>
  );
};
