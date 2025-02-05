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
import { DualRangeSlider } from "@/components/ui/dual-range-slider";

export function FilterSheet() {
  const navigate = useNavigate();
  const location = useLocation();
  const [filters, setFilters] = useState({
    manufacturer: "",
    priceRange: [1, 200000],
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
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold mb-4">
            Filter Products
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-6 py-6">
          {/* Manufacturer */}
          <div className="space-y-2">
            <Label htmlFor="manufacturer" className="text-sm font-medium">
              Manufacturer
            </Label>
            <Input
              id="manufacturer"
              name="manufacturer"
              value={filters.manufacturer}
              onChange={handleFilterChange}
              className="w-full"
            />
          </div>

          {/* Dual-Handle Price Slider */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Price Range</Label>
            <DualRangeSlider
              label={(value) => `$${value.toLocaleString()}`}
              value={filters.priceRange}
              onValueChange={handlePriceChange}
              min={1}
              max={200000}
              step={1}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${filters.priceRange[0].toLocaleString()}</span>
              <span>${filters.priceRange[1].toLocaleString()}</span>
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
              className="w-full"
            />
          </div>
        </div>
        <Button onClick={applyFilters} className="w-full mt-6">
          Apply Filters
        </Button>
      </SheetContent>
    </Sheet>
  );
}
