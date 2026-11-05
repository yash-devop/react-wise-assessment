import { Cart, OrderSummary, useCart } from "@/features/cart";
import { ProductList, products } from "@/features/products";

export const ProductListingsPage = () => {
  const { items, addToCart, removeFromCart, totalQuantity, totalPrice } =
    useCart();

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <h1 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            High-Throughput Plates
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-stone-500">
            Glass-lined, polypropylene, and COC plates for high-throughput
            experimentation. Add plates to your cart and review your order.
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
        <section aria-labelledby="catalog-heading">
          <div className="mb-3 flex items-baseline justify-between">
            <h2
              id="catalog-heading"
              className="text-sm font-semibold text-stone-900"
            >
              Catalog
            </h2>
            <span className="text-xs text-stone-500">
              {products.length} products
            </span>
          </div>
          <ProductList products={products} onAdd={addToCart} />
        </section>

        <aside className="space-y-6 lg:sticky lg:top-6">
          <section aria-labelledby="cart-heading">
            <div className="mb-3 flex items-baseline justify-between">
              <h2
                id="cart-heading"
                className="text-sm font-semibold text-stone-900"
              >
                Your cart
              </h2>
              <span className="text-xs text-stone-500">
                {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
              </span>
            </div>
            <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
              <Cart items={items} onRemove={removeFromCart} />
            </div>
          </section>

          <OrderSummary
            totalQuantity={totalQuantity}
            totalPrice={totalPrice}
          />
        </aside>
      </main>
    </div>
  );
};
