import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useState } from "react";

function ProductPage({ onAddToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.image || ""
  );

  if (!product)
    return (
      <div className="text-center p-8 text-black">
        Sorry! Product not found. Send us a suggestion and we will look into it.
      </div>
    );

  return (
    <div className="min-h-screen bg-white text-primary py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Images */}
        <div>
          <div className="aspect-[9/16] max-h-[500px] shadow-md overflow-hidden flex items-center justify-center mx-auto">
            <img
              src={selectedImage}
              alt={product.name}
              className="h-full w-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300x400?text=Image+Not+Found";
              }}
            />
          </div>

          {/* Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-4 mt-4">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-[9/16] w-20 rounded border bg-white p-1 object-contain cursor-pointer ${
                    selectedImage === img
                      ? "border-primary border-2"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right - Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500">Brand: {product.brand}</p>
          <p className="text-xl font-semibold text-primary">€{product.price}</p>

          <button
            onClick={() => onAddToCart(product)}
            className="bg-primary hover:bg-primary/80 hover:text-black text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
          >
            Add to Cart
          </button>

          <Link
            to="/products"
            className="text-sm text-primary underline hover:text-green-700 mt-4"
          >
            ← Back to All Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
