import { Request, Response } from "express";
import { products } from "./products.model";
import { asyncHandler as CatchAsync } from "../../utilities/async-handler";

export const getProducts = CatchAsync(async (req: Request, res: Response) => {
  // Get query parameters from the request (e.g., manufacturer, price, name, page, limit)
  const {
    manufacturer,
    minPrice,
    maxPrice,
    name,
    page = 1,
    limit = 10,
    isFeatured,
  } = req.query;

  // Convert page and limit to numbers
  const pageNumber = Number(page);
  const limitNumber = Number(limit);

  // Filter products based on the query parameters
  let filteredProducts = products;

  if (manufacturer && typeof manufacturer === "string") {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.manufacturer.toLowerCase() === manufacturer.toLowerCase()
    );
  }

  if (minPrice && !isNaN(Number(minPrice))) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= Number(minPrice)
    );
  }

  if (maxPrice && !isNaN(Number(maxPrice))) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= Number(maxPrice)
    );
  }

  if (isFeatured) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.isFeatured === true;
    });
  }

  if (name && typeof name === "string") {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Pagination logic
  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = pageNumber * limitNumber;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Return the paginated and filtered list of products
  res.status(200).json({
    statusCode: 200,
    message: "Successfully fetched products",
    result: paginatedProducts,
    pagination: {
      currentPage: pageNumber,
      totalPages: Math.ceil(filteredProducts.length / limitNumber),
      totalResults: filteredProducts.length,
    },
  });
});
