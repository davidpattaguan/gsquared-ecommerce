import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/modalSlice";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?name=${encodeURIComponent(searchTerm.trim())}`);
    }
  };
  const dispatch = useDispatch();
  return (
    <section className="bg-muted py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-4xl font-bold">
          Find Your Perfect Pre-Loved Car
        </h1>

        <p className="mb-8 text-xl text-muted-foreground">
          Discover quality used cars at unbeatable prices
        </p>
        <form onSubmit={handleSearch} className="mb-8 flex justify-center">
          <Input
            className="w-full max-w-sm"
            placeholder="Search for cars..."
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="ml-2" type="submit">
            Search
          </Button>
        </form>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link to="/products">Browse All Cars</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/stores">Find a Store</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
