import { formatCurrency } from "@/lib/format";

type OrderSummaryProps = {
  totalQuantity: number;
  totalPrice: number;
};

export const OrderSummary = ({
  totalQuantity,
  totalPrice,
}: OrderSummaryProps) => {
  return (
    <section
      aria-labelledby="summary-heading"
      className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
    >
      <h2
        id="summary-heading"
        className="text-sm font-semibold text-stone-900"
      >
        Order summary
      </h2>
      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <dt className="text-stone-500">Total quantity</dt>
          <dd className="tabular-nums font-medium text-stone-900">
            {totalQuantity}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-stone-200 pt-3">
          <dt className="font-medium text-stone-900">Order total</dt>
          <dd className="text-lg font-semibold tabular-nums text-stone-900">
            {formatCurrency(totalPrice)}
          </dd>
        </div>
      </dl>
      <p className="mt-3 text-xs leading-5 text-stone-500">
        Taxes and shipping are calculated at checkout.
      </p>
    </section>
  );
};
