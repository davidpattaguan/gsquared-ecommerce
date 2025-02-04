import { useEffect, useState } from "react";
import ProductCard from "@/modules/products/components/cards/product-card";
import { Product } from "@/types";

export default function FeaturedCars() {
  const [featuredCars, setFeaturedCars] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/products?limit=4&isFeatured=true")
      .then((response) => response.json())
      .then((data) => setFeaturedCars(data.result))
      .catch((error) => console.error("Error fetching featured cars:", error));
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Featured Cars</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCars.map((car) => (
            <ProductCard key={car.id} product={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
