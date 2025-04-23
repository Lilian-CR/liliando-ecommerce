import { useState } from "react";
import SkaterGirl1 from "../images/skater-girl-01.jpg";
import SkaterGirl2 from "../images/skater-girl-02.jpeg";
import AboutPreview from "../images/about-preview.jpg";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

function Home({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {/* Welcome Section */}
      <section
  id="home"
  className="scroll-mt-24 py-6 bg-primary/100 text-black px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-0"
>
  <div className="md:col-span-1 text-center md:text-left md:px-32">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to LILIANDO</h1>
    <p className="text-lg text-white">Diverse. Ethical. Bold.</p>
    <p className="text-lg text-white">Your Street Wear.</p>
    <p className="text-lg text-white">Alternative Fashion Universe.</p>
    <a
      href="/products"
      className="inline-block mt-6 text-primary font-bold bg-black px-5 py-2 rounded hover:bg-white hover:text-black transition-colors duration-200"
    >
      Shop Now <span className="text-lg ml-1">→</span>
    </a>
  </div>
  <div className="md:col-span-2 flex justify-center gap-0">
    <img
      src={SkaterGirl1}
      alt="Skater Girl 01"
      className="shadow-lg w-full max-w-xs h-[500px] object-cover"
    />
    <img
      src={SkaterGirl2}
      alt="Skater Girl 02"
      className="shadow-lg w-full max-w-xs h-[500px] object-cover"
    />
  </div>
</section>


      <div className="h-1 bg-white/30" />

      {/* Accessories */}
      <section id="accessories" className="scroll-mt-24 py-8 px-4 bg-primary/50 text-black">
  <h2 className="text-2xl font-bold mb-6 text-center">ACCESSORIES</h2>
  <div className="flex gap-4 overflow-x-auto pb-4 px-1 sm:px-2 scrollbar-hide snap-x snap-mandatory">
    {products
      .filter((product) => product.category === "accessories")
      .map((product) => (
        <div
          key={product.id}
          className="flex-none w-[260px] snap-start"
        >
          <ProductCard
            image={product.image}
            name={product.name}
            price={product.price}
            brand={product.brand}
            onClick={() => setSelectedProduct(product)}
          />
        </div>
      ))}
  </div>
</section>

      <div className="h-1 bg-white/30" />

      {/* Clothing */}
      <section id="clothing" className="scroll-mt-24 py-8 px-4 bg-stone-300 text-black">
  <h2 className="text-2xl font-bold mb-6 text-center">CLOTHING</h2>
  <div className="flex gap-4 overflow-x-auto pb-4 px-1 sm:px-2 scrollbar-hide snap-x snap-mandatory">
    {products
      .filter((product) => product.category === "clothing")
      .map((product) => (
        <div
          key={product.id}
          className="flex-none w-[260px] snap-start"
        >
          <ProductCard
            image={product.image}
            name={product.name}
            price={product.price}
            brand={product.brand}
            onClick={() => setSelectedProduct(product)}
          />
        </div>
      ))}
  </div>
</section>

      <div className="h-1 bg-white/30" />

      {/* Shoes */}
      <section id="shoes" className="scroll-mt-24 py-8 px-4 bg-primary/90 text-black">
  <h2 className="text-2xl font-bold mb-6 text-center">SHOES</h2>
  <div className="flex gap-4 overflow-x-auto pb-4 px-1 sm:px-2 scrollbar-hide snap-x snap-mandatory">
    {products
      .filter((product) => product.category === "shoes")
      .map((product) => (
        <div
          key={product.id}
          className="flex-none w-[260px] snap-start"
        >
          <ProductCard
            image={product.image}
            name={product.name}
            price={product.price}
            brand={product.brand}
            onClick={() => setSelectedProduct(product)}
          />
        </div>
      ))}
  </div>
</section>

      <div className="h-1 bg-white/30" />

      <section id="about" className="scroll-mt-24 py-8 px-4 bg-gray-100 text-primary">
  <h2 className="text-2xl font-bold mb-6 md:mb-8 text-left md:ml-32">ABOUT</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center max-w-6xl mx-auto">
    {/* Text Section */}
    <div className="text-justify md:pl-12 px-2 md:px-0">
      <p className="leading-relaxed text-sm sm:text-base">
        <strong>LILIANDO</strong> is your indie, alternative, and punk-rock-rooted gateway to ethical fashion.
        Born from rebellion against fast fashion, LILIANDO celebrates diversity, attitude, and timeless streetwear aesthetics — powered by brands like <span className="font-semibold">Dickies</span>, <span className="font-semibold">Hell Bunny</span> and <span className="font-semibold">Vans</span>.
        <br /><br />
        This project is the continuation of Lilian Rodrigues’{" "}
        <a
          href="https://codepen.io/Lilian-Rodrigues/pen/XWQGJbB"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          first-ever HTML/CSS website
        </a>
        , built in June 2024 at ReDI School. It now evolves into a modern, React-powered experience.
        <br /><br />
        Built with <span className="font-semibold">React</span>,{" "}
        <span className="font-semibold">Tailwind CSS</span>, and{" "}
        <span className="font-semibold">Vite</span> — LILIANDO is more than code. It’s design. It’s growth. It’s boldness.
      </p>
    </div>

    {/* Image Section */}
    <div className="flex justify-center">
      <img
        src={AboutPreview}
        alt="About Me"
        className="shadow-md w-full max-w-[300px] sm:max-w-xs h-auto object-cover rounded"
      />
    </div>
  </div>
</section>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
        />
      )}

      {/* Footer */}
      <footer className="bg-primary/90 text-white text-center text-xs md:text-sm py-4 px-4 md:px-8 leading-relaxed">
  <div className="max-w-4xl mx-auto">
    © 2025 <strong>Lilian Rodrigues</strong> – Styled with custom Tailwind colours · Structured with reusable components · Bundled fast with <strong>Vite</strong>
    <br className="block sm:hidden" />
    | <span className="inline-block mt-1 sm:mt-0">ReDi School Berlin – FullStack Spring Semester 2025</span>
  </div>
</footer>
    </>
  );
}

export default Home;
