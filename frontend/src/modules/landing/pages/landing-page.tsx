import Hero from "../components/hero";
import FeaturedCars from "../components/featured-cars";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <FeaturedCars />
      </main>
    </div>
  );
};

export default LandingPage;
