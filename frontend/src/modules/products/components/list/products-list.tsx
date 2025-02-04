import { Product } from "@/types";
import { FilterSheet } from "../sheets/product-filter-sheet";
import { Pagination } from "@/components/controls/pagination";
import ProductCard from "../cards/product-card";

interface ProductListProps {
  products: Product[];
  pagination: any;
}

export default function ProductList({
  products,
  pagination,
}: ProductListProps) {
  return (
    <div>
      <div className="mb-4">
        <FilterSheet />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </>
        ) : (
          <>No Cars Found</>
        )}
      </div>

      <Pagination
        currentPage={pagination?.currentPage}
        totalPages={pagination?.totalPages}
      />
    </div>
  );
}
