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
        className="scroll-mt-24 py-[5px] bg-primary/100 text-black grid grid-cols-1 md:grid-cols-3 items-center px-4 gap-0"
      >
        <div className="md:col-span-1 ml-auto">
          <h1 className="text-4xl font-bold mb-4 text-black">Welcome to LILIANDO</h1>
          <p className="text-lg text-white">Diverse. Ethical. Bold.</p>
          <p className="text-lg text-white">Your Street Wear | Alternative Fashion Universe.</p>
          <a
            href="/products"
            className="inline-block mt-6 text-primary font-bold bg-black px-5 py-2 rounded hover:bg-white hover:text-black transition-colors duration-200"
          >
            Shop Now <span className="text-lg ml-1">→</span>
          </a>
        </div>
        <div className="md:col-span-2 flex justify-center gap-0">
          <img src={SkaterGirl1} alt="Skater Girl 01" className="shadow-lg w-full max-w-xs" />
          <img src={SkaterGirl2} alt="Skater Girl 02" className="shadow-lg w-full max-w-xs" />
        </div>
      </section>

      <div className="h-1 bg-white/30" />

      {/* Accessories */}
      <section id="accessories" className="scroll-mt-24 py-[30px] px-4 bg-primary/50 text-black">
  <h2 className="text-2xl font-bold mb-8 text-center">ACCESSORIES</h2>
  <div className="overflow-x-auto scrollbar-hide">
    <div className="flex gap-6 min-w-max pb-4">
      {products
        .filter((product) => product.category === "accessories")
        .map((product) => (
          <div key={product.id} className="flex-none w-64">
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
  </div>
</section>

      <div className="h-1 bg-white/30" />

      {/* Clothing */}
      <section id="clothing" className="scroll-mt-24 py-[30px] px-4 bg-stone-300 text-black">
  <h2 className="text-2xl font-bold mb-8 text-center">CLOTHING</h2>
  <div className="overflow-x-auto scrollbar-hide">
    <div className="flex gap-6 min-w-max pb-4">
      {products
        .filter((product) => product.category === "clothing")
        .map((product) => (
          <div key={product.id} className="flex-none w-64">
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
  </div>
</section>

      <div className="h-1 bg-white/30" />

      {/* Shoes */}
      <section id="shoes" className="scroll-mt-24 py-[30px] px-4 bg-primary/90 text-black">
  <h2 className="text-2xl font-bold mb-8 text-center">SHOES</h2>
  <div className="overflow-x-auto scrollbar-hide">
    <div className="flex gap-6 min-w-max pb-4">
      {products
        .filter((product) => product.category === "shoes")
        .map((product) => (
          <div key={product.id} className="flex-none w-64">
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
  </div>
</section>

      <div className="h-1 bg-white/30" />

      {/* About Section */}
      <section id="about" className="scroll-mt-24 py-[30px] px-4 bg-gray-100 text-primary">
        <h2 className="text-2xl font-bold mb-8 md:ml-[120px] text-left text-primary">ABOUT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="md:ml-[120px] text-justify md:text-justify">
            <p className="max-w-xl leading-relaxed">
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
          <div className="flex justify-center">
            <img
              src={AboutPreview}
              alt="About Me"
              className="shadow-md w-full max-w-sm h-auto object-cover"
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
      <footer className="text-center text-sm text-gray-100 py-4 bg-primary/90">
        © 2025 Lilian Rodrigues – Styled with custom Tailwind colours • Structured with reusable components • Bundled fast with Vite | ReDi School Berlin - FullStack Spring Semester 2025
      </footer>
    </>
  );
}

export default Home;
