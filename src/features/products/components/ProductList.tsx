import type { Product } from "../types";
import { ProductRow } from "./ProductRow";

type ProductListProps = {
  products: Product[];
  onAdd: (product: Product) => void;
};

export const ProductList = ({ products, onAdd }: ProductListProps) => {
  return (
    <ul className="divide-y divide-stone-200 overflow-hidden rounded-xl border border-stone-200 bg-white">
      {products.map((product) => (
        <ProductRow key={product.id} product={product} onAdd={onAdd} />
      ))}
    </ul>
  );
};
