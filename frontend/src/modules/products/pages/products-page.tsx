import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/slices/products-slice";
import ProductList from "../components/list/products-list";
import { Shell } from "@/components/layout/shell";
import { AppDispatch, RootState } from "@/store/store";
import { useLocation } from "react-router";
import { FilterSheet } from "../components/sheets/product-filter-sheet";

const ProductsPage = () => {
  const location = useLocation();

  const { products, pagination, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts(location.search));
  }, [location.search]);

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
      <div className="flex justify-between">
        {" "}
        <h1 className="font-bold text-2xl">Car Listings</h1>{" "}
        <div className="mb-4">
          <FilterSheet />
        </div>
      </div>

      <ProductList products={products} pagination={pagination} />
    </Shell>
  );
};

export default ProductsPage;
