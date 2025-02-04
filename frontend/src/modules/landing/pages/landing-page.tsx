import Header from "@/components/layout/header";
import React from "react";
import Hero from "../components/hero";
import FeaturedCars from "../components/featured-cars";

type Props = {};

const LandingPage = (props: Props) => {
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
