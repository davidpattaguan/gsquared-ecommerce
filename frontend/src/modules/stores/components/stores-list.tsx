"use client";

import { useState, useEffect, useRef } from "react";
import { Star, MapPin } from "lucide-react";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Shell } from "@/components/layout/shell";

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

export default function NearbyCarStores({ carStores }: any) {
  const [selectedStore, setSelectedStore] = useState<any | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  //   useEffect(() => {
  //     if (map.current) return; // initialize map only once
  //     map.current = new mapboxgl.Map({
  //       container: mapContainer.current!,
  //       style: "mapbox://styles/mapbox/streets-v11",
  //       center: [
  //         carStores[0]?.geometry?.location?.lng || 12,
  //         carStores[0]?.geometry?.location?.lat || 12,
  //       ],
  //       zoom: 13,
  //     });

  //     // Add markers for each store
  //     carStores.forEach((store) => {
  //       const marker = new mapboxgl.Marker()
  //         .setLngLat([store.geometry.location.lng, store.geometry.location.lat])
  //         .setPopup(
  //           new mapboxgl.Popup().setHTML(
  //             `<h3>${store.name}</h3><p>${store.vicinity}</p>`
  //           )
  //         )
  //         .addTo(map.current!);
  //     });
  //   }, []);

  const openGoogleMaps = (store: CarStore) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${store.geometry.location.lat},${store.geometry.location.lng}`;
    window.open(url, "_blank");
  };

  return (
    <Shell variant={"default"}>
      <div>
        {" "}
        <h1 className="text-3xl font-bold mb-6">Nearby Car Stores</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* <div>
          <div
            ref={mapContainer}
            className="h-[400px] rounded-lg shadow-md mb-6"
          />
        </div> */}
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carStores.map((store, index) => (
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
                  <div className="flex justify-end">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                      onClick={() => openGoogleMaps(selectedStore)}
                    >
                      Open in Google Maps
                    </button>
                    <button
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                      onClick={() => setSelectedStore(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Shell>
  );
}
