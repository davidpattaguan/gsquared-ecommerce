import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router";
import { fetchProductById } from "../features/slices/products-slice";
import { Badge } from "@/components/ui/badge";
import { Battery, Calendar1Icon, Gauge, PenToolIcon, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const session = useSelector((state: RootState) => state.auth.session);
  // const dispatch = useDispatch();
  // const { id } = useParams(); // Get ID from URL params
  // const { product, loading, error } = useSelector((state) => state.products);

  // useEffect(() => {
  //   dispatch(fetchProductById(id));
  // }, [dispatch, id]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  // if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Image gallery */}
        <div className="flex flex-col-reverse">
          <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <div
              className="grid grid-cols-4 gap-6"
              aria-orientation="horizontal"
              role="tablist"
            >
              {[1, 2, 3, 4].map((idx) => (
                <button
                  key={idx}
                  className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  aria-controls={`tabs-${idx}-panel`}
                  role="tab"
                >
                  <span className="sr-only">Thumbnail {idx}</span>
                  <span className="absolute inset-0 rounded-md overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=96&width=96`}
                      alt=""
                      className="w-full h-full object-center object-cover"
                      width={96}
                      height={96}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full aspect-w-1 aspect-h-1">
            <div
              id="tabs-1-panel"
              aria-labelledby="tabs-1-tab"
              role="tabpanel"
              tabIndex={0}
            >
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Main car image"
                className="w-full h-full object-center object-cover sm:rounded-lg"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            2020 Acme Thunderbolt EV (Preloved)
          </h1>

          <div className="mt-3 flex items-center">
            <Badge variant="secondary" className="mr-2">
              Acme
            </Badge>
            <Badge variant="outline">Midnight Blue</Badge>
          </div>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">$54,999</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700">
              This preloved 2020 Acme Thunderbolt EV is a fantastic opportunity
              to own a high-performance electric vehicle at a great value. With
              only 25,000 miles on the odometer, this car combines luxury,
              performance, and sustainability. It boasts a range of up to 380
              miles on a single charge and acceleration from 0-60 mph in just
              3.4 seconds. This Thunderbolt EV is in excellent condition and has
              been meticulously maintained by its previous owner.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar1Icon className="mr-2 h-4 w-4" /> Vehicle Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Year: 2020</li>
                  <li>Make: Acme</li>
                  <li>Model: Thunderbolt EV</li>
                  <li>Color: Midnight Blue</li>
                  <li>VIN: 1HGBH41JXMN109186</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gauge className="mr-2 h-4 w-4" /> Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Mileage: 25,000 miles</li>
                  <li>Range: Up to 380 miles</li>
                  <li>0-60 mph: 3.4 seconds</li>
                  <li>Top Speed: 155 mph</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Battery className="mr-2 h-4 w-4" /> Battery & Charging
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Battery Capacity: 100 kWh</li>
                  <li>Fast Charging: Up to 250 kW</li>
                  <li>Battery Warranty: 6 years remaining</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PenToolIcon className="mr-2 h-4 w-4" /> Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full service history</li>
                  <li>Recent software update</li>
                  <li>New tires (less than 1,000 miles)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            {session ? (
              <>
                {" "}
                <Button size="lg" className="w-full">
                  Order now
                </Button>
              </>
            ) : (
              <>
                <Button size="lg" className="w-full">
                  Login To Continue
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
