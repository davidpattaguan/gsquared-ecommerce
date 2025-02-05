import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/types";
import { Link } from "react-router";

type ProducCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProducCardProps) => {
  return (
    <Card className="overflow-hidden">
      <img
        src={product.imageUrl || "/placeholder.svg"}
        alt={product.name}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.category}</p>
        {/* <p className="text-lg font-bold mt-2">${product?.price.toFixed(2)}</p> */}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link to={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
