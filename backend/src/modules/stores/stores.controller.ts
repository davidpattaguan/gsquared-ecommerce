import { Request, Response } from "express";
import NodeCache from "node-cache";
import { asyncHandler as CatchAsync } from "../../utilities/async-handler";

const cache = new NodeCache({ stdTTL: 300 }); // Cache for 5 minutes

export const getStores = CatchAsync(async (req: Request, res: Response) => {
  let { lat, lng, radius = "5000", type = "car_dealer" } = req.query;

  if (!lat || !lng) {
    return res
      .status(400)
      .json({ message: "Location is required. Enable GPS." });
  }

  const cacheKey = `${lat},${lng},${radius},${type}`;
  const cachedData = cache.get(cacheKey) as any;

  if (cachedData) {
    return res.status(200).json({
      message: "Fetched from cache",
      result: cachedData,
    });
  }

  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
  );
  url.searchParams.append("location", `${lat},${lng}`);
  url.searchParams.append("radius", radius as string);
  url.searchParams.append("type", type as string);
  url.searchParams.append("key", process.env.GOOGLE_PLACES_API_KEY as string);

  const response = await fetch(url);
  const data = await response.json();

  cache.set(cacheKey, data);

  res.status(200).json({
    message: "Successfully fetched stores",
    result: data,
  });
});
