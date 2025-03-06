import Hero from "./components/sections/Hero";
import Info from "./components/sections/Info";
import Pricing from "./components/sections/Pricing";
import Location from "./components/sections/Location";

export default function Home() {
  return (
     <>
       <Hero/>
      <div className="max-w-screen-xl mx-auto">
       <Info/>
       <Pricing/>
       <Location/>
      </div>
     </>
  );
}
