import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/slices/products-slice";
import ProductList from "../components/list/products-list";
import { Shell } from "@/components/layout/shell";
import { AppDispatch, RootState } from "@/store/store";
import { useLocation } from "react-router";

const ProductsPage = () => {
  const { products, pagination, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch

  const location = useLocation();

  useEffect(() => {
    dispatch(fetchProducts(location.search));
  }, [location.search]); // Add location.search as a dependency

  if (loading) {
    return <div className="col-span-full text-center py-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="col-span-full text-center py-10">Error: {error}</div>
    );
  }

  return (
    <Shell variant={"default"}>
      <h1 className="font-bold text-2xl">Car Listings</h1>
      <ProductList products={products} pagination={pagination} />
    </Shell>
  );
};

export default ProductsPage;
