import Hero from "./components/sections/Hero";
import Info from "./components/sections/Info";
import Pricing from "./components/sections/Pricing";
import Location from "./components/sections/Location";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Hero />
        <div className="max-w-screen-xl mx-auto">
          <Info />
          <Pricing />
          <Location />
        </div>
      </div>
      <Footer />
    </div>
  );
}