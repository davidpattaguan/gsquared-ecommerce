import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { fetchProductById } from "../features/slices/products-slice";
import { Battery, Calendar, Gauge, PenTool } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import type { AppDispatch, RootState } from "@/store/store";
import LoginButton from "@/modules/authentication/components/actions/login-button";

const ProductDetail = () => {
  const session = useSelector((state: RootState) => state.auth.session);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { product, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductById(Number(id)));
  }, [dispatch, id]);

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (error)
    return <div className="text-center py-12 text-red-600">Error: {error}</div>;
  if (!product)
    return <div className="text-center py-12">Product not found</div>;

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Image */}
        <div className="lg:col-span-1">
          <div className=" rounded-lg bg-gray-100 overflow-hidden">
            <img
              src={product.imageUrl || "/placeholder.svg?height=600&width=800"}
              alt={`Image of ${product.name}`}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {product.name}
          </h1>

          <div className="mt-3">
            <p className="text-3xl text-gray-900">${product.price}</p>
          </div>

          <div className="mt-6">
            <p className="text-base text-gray-700">{product.description}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ProductInfoCard
              icon={Calendar}
              title="Vehicle Details"
              items={[
                "Year: 2020",
                "Make: Acme",
                "Model: Thunderbolt EV",
                "Color: Midnight Blue",
                "VIN: 1HGBH41JXMN109186",
              ]}
            />
            <ProductInfoCard
              icon={Gauge}
              title="Performance"
              items={[
                "Mileage: 25,000 miles",
                "Range: Up to 380 miles",
                "0-60 mph: 3.4 seconds",
                "Top Speed: 155 mph",
              ]}
            />
            <ProductInfoCard
              icon={Battery}
              title="Battery & Charging"
              items={[
                "Battery Capacity: 100 kWh",
                "Fast Charging: Up to 250 kW",
                "Battery Warranty: 6 years remaining",
              ]}
            />
            <ProductInfoCard
              icon={PenTool}
              title="Maintenance"
              items={[
                "Full service history",
                "Recent software update",
                "New tires (less than 1,000 miles)",
              ]}
            />
          </div>

          <div className="mt-10">
            {session ? (
              <Link
                to={`/products/${id}/order`}
                className={cn(buttonVariants({ variant: "default" }), "w-full")}
              >
                Order now
              </Link>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProductInfoCardProps {
  icon: React.ElementType;
  title: string;
  items: string[];
}

const ProductInfoCard = ({
  icon: Icon,
  title,
  items,
}: ProductInfoCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center">
        <Icon className="mr-2 h-4 w-4" /> {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-5 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default ProductDetail;
