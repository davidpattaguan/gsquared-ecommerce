"use client";

import { useState } from "react";
import { Star, MapPin } from "lucide-react";

import "mapbox-gl/dist/mapbox-gl.css";
import { Shell } from "@/components/layout/shell";
import { Button } from "@/components/ui/button";

export default function NearbyCarStores({ carStores }: any) {
  const [selectedStore, setSelectedStore] = useState<any | null>(null);

  const openGoogleMaps = (store: any) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${store.geometry.location.lat},${store.geometry.location.lng}`;
    window.open(url, "_blank");
  };

  return (
    <Shell variant={"default"}>
      {" "}
      <h1 className="text-3xl font-bold mb-6">Nearby Car Stores</h1>
      <div className="grid grid-cols-1 ">
        <div className="">
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carStores.map((store: any, index: any) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedStore(store)}
              >
                {store.photos && store.photos[0] && (
                  <img
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${store.photos[0].photo_reference}&key=YOUR_API_KEY`}
                    alt={store.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{store.name}</h2>
                  <div className="flex items-center mb-2">
                    <Star className="text-yellow-400 mr-1" />
                    <span>{store.rating}</span>
                    <span className="text-gray-500 ml-1">
                      ({store.user_ratings_total} reviews)
                    </span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-gray-500 mr-1 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{store.vicinity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {selectedStore && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedStore.name}
                </h2>
                <p className="mb-4">{selectedStore.vicinity}</p>
                <div className="flex justify-end gap-2">
                  <Button onClick={() => openGoogleMaps(selectedStore)}>
                    Open in Google Maps
                  </Button>
                  <Button onClick={() => setSelectedStore(null)}>Close</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Shell>
  );
}
