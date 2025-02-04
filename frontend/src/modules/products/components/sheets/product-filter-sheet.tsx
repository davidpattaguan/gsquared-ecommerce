import type React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DualRangeSlider } from "@/components/ui/dual-range-slider"; // Import your custom DualRangeSlider

export function FilterSheet() {
  const navigate = useNavigate();
  const location = useLocation();
  const [filters, setFilters] = useState({
    manufacturer: "",
    priceRange: [1, 200000], // Default range
    name: "",
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setFilters({
      manufacturer: searchParams.get("manufacturer") || "",
      priceRange: [
        Number(searchParams.get("minPrice")) || 1,
        Number(searchParams.get("maxPrice")) || 200000,
      ],
      name: searchParams.get("name") || "",
    });
  }, [location.search]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handlePriceChange = (value: number[]) => {
    setFilters((prev) => ({ ...prev, priceRange: value }));
  };

  const applyFilters = () => {
    const searchParams = new URLSearchParams();
    if (filters.manufacturer)
      searchParams.append("manufacturer", filters.manufacturer);
    if (filters.name) searchParams.append("name", filters.name);
    searchParams.append("minPrice", String(filters.priceRange[0]));
    searchParams.append("maxPrice", String(filters.priceRange[1]));

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Filters</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter Products</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {/* Manufacturer */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="manufacturer" className="text-right">
              Manufacturer
            </Label>
            <Input
              id="manufacturer"
              name="manufacturer"
              value={filters.manufacturer}
              onChange={handleFilterChange}
              className="col-span-3"
            />
          </div>

          {/* Dual-Handle Price Slider */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Price Range</Label>
            <div className="col-span-3 flex flex-col gap-2">
              <DualRangeSlider
                label={(value) => `$${value}`} // Show price with $
                value={filters.priceRange}
                onValueChange={handlePriceChange}
                min={1}
                max={200000}
                step={1}
              />
            </div>
          </div>

          {/* Name */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
              className="col-span-3"
            />
          </div>
        </div>
        <Button onClick={applyFilters} className="w-full">
          Apply Filters
        </Button>
      </SheetContent>
    </Sheet>
  );
}
