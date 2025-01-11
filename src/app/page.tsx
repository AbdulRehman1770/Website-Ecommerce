'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api');
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className='flex flex-col justify-center items-center py-6 md:flex-none overflow-hidden'>
      <h1 className='lg:text-4xl md:text-3xl text-2xl text-pink-500 font-semibold'>Product List</h1>
      <div className="m-6 md:m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10">
        {products.map((product) => (
          <div key={product.id} className="md:w-80 md:h-80 lg:w-96 lg:h-96 w-60 h-72 grid grid-rows-11 rounded-lg shadow-xl">
            <div className="relative bg-red-500 md:w-80 rounded-lg lg:h-52 h-40 lg:w-96 w-60 row-span-6 opacity-0 transition-opacity duration-1000 ease-in-out" onLoad={(e) => e.currentTarget.classList.add("opacity-100")}>
              <Image
                src={`/${product.image}`} // Ensure the image path is correctly resolved
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center text-center text-sm pt-1 md:text-xl lg:text-2xl bg-white text-pink-500">{product.name}</div>
            <div className="flex justify-center items-center text-center bg-white text-2xl md:text-3xl lg:text-4xl font-bold pt-3">${product.price}</div>
            <Link href={`/products/${product.id}`} className="block mt-3 md:mt-2 lg:mt-3 text-blue-500 bg-white text-sm text-center">
              View Details
            </Link>
            <div className='md:pt-4 pt-6 flex justify-center items-center'>
              <button onClick={() => addToCart(product)} className='bg-pink-500 md:rounded-md lg:rounded-lg lg:text-lg md:text-[15px] rounded-md text-[12px] md:px-3 py-1 px-2 text-white text-center'>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='pt-5'>
        <h2 className='bg-pink-500 md:p-4 p-2 rounded-xl text-white md:text-2xl text-xl mb-3 text-center'>Cart Summary</h2>
        <ul className='text-center'>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <h2 className='bg-pink-500 md:p-4 p-2 rounded-xl text-white md:text-2xl text-xl md:mb-3 my-2 text-center'> Total Price: ${totalPrice}</h2>
      </div>
    </div>
  );
}