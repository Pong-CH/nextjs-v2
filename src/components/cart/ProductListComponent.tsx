"use client";

import { removeFromCart } from "@/redux/features/cart/cardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function ProductListComponent() {

  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <section className="w-[600px] h-[700px] relative bg-white dark:bg-[#0A2025]">
      <div className="bg-white flex flex-col h-full absolute right-0 p-10 w-[450px]">

        {/* Header */}
        <div className="flex items-center mb-3 justify-between">
          <h2 className="text-[#191919] text-xl font-medium leading-[30px]">
            Shopping Cart ({cart.items.length})
          </h2>

          <svg
            width={45}
            height={45}
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22.5" cy="22.5" r="22.5" fill="white" />
            <path
              d="M28.75 16.25L16.25 28.75"
              stroke="#1A1A1A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.25 16.25L28.75 28.75"
              stroke="#1A1A1A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Cart Items */}
        {cart.items.map(({id,  image, title, quantity, price }, index) => (
          <div
            key={id}
            className="flex gap-2 mb-6 items-center"
          >
            <img
              width={120}
              height={100}
              src={image}
              alt={title}
              className="object-cover"
            />

            <div>
              <h3 className="w-[216px] text-[#191919] text-sm font-normal leading-[21px]">
                {title}
              </h3>

              <p>
                <span className="text-[#7f7f7f] text-sm font-normal leading-[21px]">
                  Qty: {quantity}
                </span>

                <span className="ml-2 text-[#191919] text-sm font-semibold leading-[16.80px]">
                  ${price}
                </span>
              </p>
            </div>

            {/* Remove Icon */}
            <button
              onClick={() => {
                if (id !== undefined) {
                  dispatch(removeFromCart(id));
                }
              }}
              className="cursor-pointer"
              aria-label={`Remove ${title} from cart`}
            >
              <svg
                width={32}
                height={32}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="11" stroke="#CCCCCC" />

                <path
                  d="M16 8L8 16"
                  stroke="#666666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                <path
                  d="M16 16L8 8"
                  stroke="#666666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        ))}

        {/* Cart Summary */}
        <div className="mt-auto">
          <div className="py-6 bg-white flex justify-between items-center">
            <span className="text-[#191919] text-base font-normal leading-normal">
              {cart.totalQuantity} Products
            </span>

            <span className="text-[#191919] text-base font-semibold leading-tight">
              ${cart.totalAmount.toFixed(2)}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}