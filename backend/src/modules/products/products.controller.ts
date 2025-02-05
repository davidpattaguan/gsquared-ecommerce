import { Request, Response } from "express";
import { products } from "./products.model";
import { asyncHandler as CatchAsync } from "../../utilities/async-handler";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 300 }); // Cache for 5 minutes

export const getProducts = CatchAsync(async (req: Request, res: Response) => {
  // Generate cache key based on query parameters
  const cacheKey = JSON.stringify(req.query);

  // Check if data exists in cache
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.status(200).json({
      statusCode: 200,
      message: "Successfully fetched products (from cache)",
      ...cachedData,
    });
  }

  const {
    manufacturer,
    minPrice,
    maxPrice,
    name,
    page = 1,
    limit = 10,
    isFeatured,
  } = req.query;
  const pageNumber = Number(page);
  const limitNumber = Number(limit);

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
    filteredProducts = filteredProducts.filter(
      (product) => product.isFeatured === true
    );
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

  const response = {
    statusCode: 200,
    message: "Successfully fetched products",
    result: paginatedProducts,
    pagination: {
      currentPage: pageNumber,
      totalPages: Math.ceil(filteredProducts.length / limitNumber),
      totalResults: filteredProducts.length,
    },
  };

  // Store result in cache
  cache.set(cacheKey, response);

  res.status(200).json(response);
});

export const getProductById = CatchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    // Check cache first
    const cacheKey = `product_${id}`;
    const cachedProduct = cache.get(cacheKey);
    if (cachedProduct) {
      return res.status(200).json({
        statusCode: 200,
        message: "Successfully fetched product (from cache)",
        result: cachedProduct,
      });
    }

    const product = products.find((p) => p.id === Number(id));

    if (!product) {
      return res.status(404).json({
        statusCode: 404,
        message: "Product not found",
      });
    }

    // Store in cache
    cache.set(cacheKey, product);

    res.status(200).json({
      statusCode: 200,
      message: "Successfully fetched product",
      result: product,
    });
  }
);
