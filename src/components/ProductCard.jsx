function ProductCard({ image, name, brand, price, onClick, onAddToCart }) {
    return (
      <div
        className="bg-white p-4 rounded shadow text-center cursor-pointer hover:shadow-lg transition"
        onClick={onClick}
      >
        <img
  src={image}
  alt={name}
  className="mb-2 mx-auto h-64 w-full object-contain"
/>
        <p className="text-sm font-semibold">{name}</p>
        {brand && <p className="text-xs text-gray-500">{brand}</p>}
        <p className="text-sm font-bold text-primary">€{price}</p>
        {onAddToCart && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // To prevent click bubbling
              onAddToCart();
            }}
            className="mt-2 px-4 py-1 text-sm bg-primary text-white rounded hover:bg-primary/80 hover:text-black transition-colors duration-300 ease-in-out"
          >
            Add to Cart
          </button>
        )}
      </div>
    );
  }
  
  export default ProductCard;