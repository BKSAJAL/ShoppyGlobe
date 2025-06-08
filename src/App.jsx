import banner from "./assets/banner.jpg";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      {/* welcome message */}
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="h-120 flex items-center text-shado-lg text-shadow-whit">
          <div className="py-1 bg-white/60 w-full text-center">
            <h1 className="text-3xl sm:text-4xl">
              🛒 Welcome to <span className="font-normal">ShoppyGlobe</span>
            </h1>
            <p className="text-sm sm:text-base">
              Discover the best deals, curated just for you. Shop smart, shop
              happy!
            </p>
          </div>
        </div>
      </section>

      {/* product list */}
      <div>
        <ProductList />
      </div>
    </div>
  );
}

export default App;
