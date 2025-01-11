import React from 'react';

async function getProduct(id: any) {
  const res = await fetch(`http://localhost:3000/api`);
  if (!res.ok) throw new Error('Failed to fetch product');
  const products = await res.json();
  return products.find((product: any) => product.id === id);
}

type PageProps = {
  params: { id: string }; // Define params for dynamic routing
};

export default async function ProductPage({ params }: any) {
  const product = await getProduct(params.id);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-2xl mx-auto bg-white p-6 shadow rounded">
        {/* Ensure the image path is correctly resolved */}
        <img
          src={product.image.startsWith('/') ? product.image : `/${product.image}`}
          alt={product.name}
          className="w-full h-60 md:h-96 object-cover rounded mb-4"
        />
        <h1 className="text-3xl font-semibold text-pink-500">{product.name}</h1>
        <p className="text-gray-600 text-xl">${product.price}</p>
        <p className="mt-4 text-pink-500">{product.description}</p>
      </div>
    </div>
  );
}





