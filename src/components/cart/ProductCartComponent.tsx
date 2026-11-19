"use client";
import { CartInfer } from "@/libs/cart/cart-type";
import { addToCart } from "@/redux/features/cart/cardSlice";
import { useAppDispatch } from "@/redux/hook";

export default function ProductCartComponent() {
  const dispatch = useAppDispatch();
  return (
    <section className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      { 
        mockCartItems.map((item) => {
        const { title, image, category, price } = item;

        return (
            <article className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
              <div>
                <img
                  className="object-cover h-64 w-full"
                  src={image}
                  alt="Converse sneakers"
                />
              </div>
              <div className="flex flex-col gap-1 mt-4 px-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
                  {title}
                </h2>
                <span className="font-normal text-gray-600 dark:text-gray-300">
                  {category}
                </span>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  {price}
                </span>
              </div>
              <div className="flex gap-4 mt-4 px-4">
                <span className="sr-only">Colors available</span>
                <button
                  aria-label="Yellow"
                  className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"
                />
                <button
                  aria-label="Red"
                  className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"
                />
                <button
                  aria-label="Blue"
                  className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"
                />
                <button
                  aria-label="Black"
                  className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"
                />
              </div>
              <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
                <button
                  className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50"
                  onClick={() => dispatch(addToCart(item))}
                >
                  <span className="text-base">Add to Cart</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </article>
          
        );
      })}
    </section>
  );
}

export const mockCartItems: CartInfer[] = [
  {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    price: 129.99,
    description:
      "Over-ear Bluetooth headphones with active noise cancellation and 30-hour battery life.",
    category: "electronics",
    image: "https://picsum.photos/seed/headphones/400/400",
  },
  {
    id: 2,
    title: "Classic Cotton T-Shirt",
    price: 19.5,
    description:
      "Soft, breathable crew-neck t-shirt made from 100% organic cotton.",
    category: "men's clothing",
    image: "https://picsum.photos/seed/tshirt/400/400",
  },
  {
    id: 3,
    title: "Stainless Steel Water Bottle",
    price: 24.0,
    description:
      "Double-wall insulated bottle that keeps drinks cold for 24 hours or hot for 12.",
    category: "home & kitchen",
    image: "https://picsum.photos/seed/bottle/400/400",
  },
  {
    id: 4,
    title: "Women's Running Sneakers",
    price: 74.95,
    description:
      "Lightweight, cushioned running shoes with breathable mesh upper and durable grip sole.",
    category: "women's clothing",
    image: "https://picsum.photos/seed/sneakers/400/400",
  },
  {
    id: 5,
    title: "Mechanical Gaming Keyboard",
    price: 89.0,
    description:
      "RGB backlit mechanical keyboard with hot-swappable switches and aluminum frame.",
    category: "electronics",
    image: "https://picsum.photos/seed/keyboard/400/400",
  },
  {
    id: 6,
    title: "Silver Pendant Necklace",
    price: 59.99,
    description:
      "Elegant sterling silver necklace with a minimalist geometric pendant.",
    category: "jewelery",
    image: "https://picsum.photos/seed/necklace/400/400",
  },
  {
    id: 7,
    title: "Ceramic Pour-Over Coffee Set",
    price: 42.75,
    description:
      "Handcrafted ceramic dripper and server set for brewing smooth, flavorful coffee.",
    category: "home & kitchen",
    image: "https://picsum.photos/seed/coffee/400/400",
  },
  {
    id: 8,
    title: "Canvas Backpack",
    price: 54.0,
    description:
      "Durable waxed-canvas backpack with padded laptop sleeve and multiple pockets.",
    category: "accessories",
    image: "https://picsum.photos/seed/backpack/400/400",
  },
];
